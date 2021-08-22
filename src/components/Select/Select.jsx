import React from 'react'
import * as S from './Select.style'
import PropTypes from 'prop-types'

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default function Select({
  onChange,
  value = '',
  title,
  options = [],
  titleValue = '',
  ...props
}) {
  const handleChange = event => {
    const val = event.target.value
    onChange && onChange(val)
  }
  return (
    <S.Select onChange={handleChange} value={value} {...props}>
      <option disable value={titleValue}>
        {title}
      </option>
      {options.map(({ name, value }, index) => (
        <option value={value} key={index}>
          {name}
        </option>
      ))}
    </S.Select>
  )
}
