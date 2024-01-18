
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormSliders() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    {/* name from form utils */}
      <KarimField name="image_en" type="File"label='image_en'  placeholder='slider_image' />
      
    </Col>
    <Col>
    {/* name from form utils */}
      <KarimField name="image_ar" type="File"label='image_ar'  placeholder='slider_image' />
      
    </Col>
   
  </Row>
  )
}

export default FormSliders


