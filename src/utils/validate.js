
const validateForm = (validateRules, name, value) => {
  try {
    validateRules[name].rules.forEach(data => {
      validateRules[name].results = validateRule(data, value)
      if (!validateRule(data, value).verify) {
        throw new Error('break')
      }
    })
  } catch (error) { }

  return validateRules
}

/**
 * @description 表单验证
 * @param {*} data 验证的规则数组
 * @param {*} value 验证的value
 */
const validateRule = (data, value) => {
  return  data.name.includes('Length') ? 
    rules[data.name.split(':')[0]](data, value, data.name.split(':')[1]) 
    : 
    rules[data.name](data, value)
}
/* 验证规则的处理方法 */
const rules = {
  /* 必填 */
  required(data, value) {
    return value.trim() === '' ? {
      verify: false,
      text: data.text
    } : {
      verify: true
    }
  },
  /* 邮箱 */
  isEmail(data, value) {
    // eslint-disable-next-line
    return !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) ? {
      verify: false,
      text: data.text
    } : {
      verify: true
    }
  },
  /* 最小长度 */
  minLength(data, value, len) {
    return value.trim().length < len ? {
      verify: false,
      text: data.text
    } : {
      verify: true
    }
  },
  /* 手机 */
  isPhone(data, value) {
    // eslint-disable-next-line
    return !(/^1[3|4|5|7|8|][0-9]{9}$/.test(value)) ? {
      verify: false,
      text: data.text
    } : {
      verify: true
    }
  }
}



export default validateForm