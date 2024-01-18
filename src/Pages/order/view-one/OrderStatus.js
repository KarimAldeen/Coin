import React from "react";
import { Badge } from "reactstrap";

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const OrderStatus = ({ order_status }) => {
    const [t] = useTranslation();
    const all={
        pending:{color:"secondary"},
        accepted:{color:"success"},
        accept:{color:"success"},
        delivering:{color:"primary"},
        delivered:{color:"success"},
        canceled:{color:"danger"}
    }
    

    
  return (
        <Badge color={all[order_status].color}>
                {t(order_status)}
        </Badge>
  );
};

OrderStatus.propTypes = {
    order_status: PropTypes.string.isRequired,
};

export default OrderStatus;
