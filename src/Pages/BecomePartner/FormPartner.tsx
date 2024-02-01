
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';
import { usePageState } from '../../lib/state mangment/LayoutPagestate';
import { useTranslation } from 'react-i18next';

function FormContactus() {

  const [t] = useTranslation()
  const  {objectToEdit:letter} = usePageState();


  return (
    <div className="contact-letter">
    <h3>{t('Become Partner letter')}</h3>
    <div className="letter-content">
      <p><strong>{t('name')}:</strong> {letter.name}</p>
      <p><strong>{t("description")}:</strong> {letter.description}</p>
      <p><strong>{t("price")}:</strong> {letter.price}</p>
      <p><strong>{t("message")}:</strong> <p>{letter.note}</p></p>
    </div>
  </div>
  )
}

export default FormContactus


