import React from 'react'
import AllIcon from './icons'

/**
 * 
 * @param {*} type 图标类型
 * @param {*} fill 图标fill 颜色
 * @param {*} style 图标样式
 */
const Icon = ({ type, fill, style }) => (
  <svg viewBox="64 64 896 896" data-icon={AllIcon[type].name} width="1em" height="1em" style={style} fill={fill ? fill : 'currentColor'}>
    {
      AllIcon[type].path.map((path, index) => (
        <path d={path} key={index}>
        </path>
      ))
    }
  </svg>
)

export default Icon