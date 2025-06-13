import { components } from 'react-select';

export const PriceDisplay = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    {`To $${data.value}`}
  </components.SingleValue>
);