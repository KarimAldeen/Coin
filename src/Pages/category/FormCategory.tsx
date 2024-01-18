
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormCategory() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    {/* name from form utils */}
      <KarimField name="translated_fields[1][category_name]" type="text"label='category_name_en'  placeholder='name  ' />
      
    </Col>
    <Col>
    <KarimField name="translated_fields[2][category_name]" type="text"label='category_name_ar'  placeholder='name' />
    <KarimField name="category_image" type="File" label='category_image'  placeholder='image' />

    </Col>

   
  </Row>
  )
}

export default FormCategory


