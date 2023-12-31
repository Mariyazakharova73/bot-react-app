import React, { useState, useEffect } from "react";
import "./Form.css";
import { useTelegram } from "./../../hooks/useTelegam";
import { useCallback } from "react";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, [country, street, subject, tg]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, [tg.MainButton]);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [street, country, tg.MainButton]);

  return (
    <form className="form">
      <h3>Введите ваши данные</h3>
      <input
        className="input"
        value={country}
        onChange={onChangeCountry}
        type="text"
        placeholder="Страна"
      />
      <input
        className="input"
        value={street}
        onChange={onChangeStreet}
        type="text"
        placeholder="Улица"
      />
      <select value={subject} onChange={onChangeSubject} className="select">
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </form>
  );
};

export default Form;
