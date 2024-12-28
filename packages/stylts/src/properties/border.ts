import { Whatever } from '../utils';
import { numericStyleValue } from '../fns';

export const border = (values: Whatever) => ({
  border: values || '1px solid'
})
border.sm = border('1px solid');
border.lightGray = { borderColor: '#d0d0d0' }

export const rounded = (values: Whatever) => ({
  borderRadius: numericStyleValue(values || '3px')
});

rounded.sm = { borderRadius: numericStyleValue(3) }
rounded.med = { borderRadius: numericStyleValue(7) }
rounded.lg = { borderRadius: numericStyleValue(13) }
rounded.xl = { borderRadius: numericStyleValue(25) }
