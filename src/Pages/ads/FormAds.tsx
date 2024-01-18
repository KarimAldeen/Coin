
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormAds() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    {/* name from form utils */}
    <KarimField name="image_en"  type="File" label='image_en' placeholder='placeholder'  />
      
    </Col>
    <Col>
    <KarimField name="image_ar"  type="File" label='image_ar' placeholder='placeholder'  />

    </Col>

   
  </Row>
  )
}

export default FormAds


