export const customSelectStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: '#F7F7F7',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: 'none',
    height: '44px',
    width: '100%',
    color: '#101828',
    fontSize: '16px',
    fontFamily: 'Manrope',
    fontWeight: '500',
    lineHeight: '1.25',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '18px',
    paddingRight: '18px',
    '&:hover': {
      border: 'none',
    },
    '&:focus': {
      border: 'none',
    },
    '&:focus-within': {
      border: 'none',
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: '#FFFFFF',
    color: state.isSelected
      ? '#101828'
      : state.isFocused
      ? '#101828'
      : ' #8D929A',
    fontSize: '16px',
    fontWeight: 500,
    padding: '14px 18px',
    cursor: 'pointer',
    width: '100%',
  }),
  menu: base => ({
    ...base,
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    marginTop: 4,
    maxHeight: '200px',
    animation: 'slideDown 0.3s ease-out',
    transformOrigin: 'top',
    border: '1px solid #E4E7EC',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }),
  menuList: base => ({
    ...base,
    maxHeight: '200px',
    overflowY: 'auto',
    padding: '8px 0',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
      borderRadius: '10px',
      margin: '8px 0',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#dadde1',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#c1c5cc',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#dadde1 transparent',
  }),
  singleValue: base => ({
    ...base,
    color: '#101828',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    minWidth: 0,
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
  }),
  placeholder: base => ({
    ...base,
    color: '#101828',
    display: 'flex',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  valueContainer: base => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    padding: '0',
  }),
  input: base => ({
    ...base,
    caretColor: 'transparent',
    cursor: 'pointer',
    '& input': {
      cursor: 'pointer !important',
    },
  }),
};
