import { components } from 'react-select';

export const PriceDisplay = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    {`Up to $${data.value}`}
  </components.SingleValue>
);