export const toFullName = (firstName: string, middleName: string, lastName: string, language: string) => {
  if (language === 'vi') {
    return [lastName, middleName, firstName].filter(Boolean).join(' ')
  } else {
    return [firstName, middleName, lastName].filter(Boolean).join(' ')
  }
}

export const ConvertBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

export const separationFullName = (fullName: string, language: string) => {
  const result = {
    firstName: '',
    middleName: '',
    lastName: ''
  }

  const arrFullName = fullName.trim().split(' ').filter(Boolean)
  if (arrFullName.length === 1) {
    if (language === 'vi') {
      result.firstName = arrFullName.join()
    } else if (language === 'en') {
      result.lastName = arrFullName.join()
    }
  } else if (arrFullName.length === 2) {
    if (language === 'vi') {
      console.log('vi lenght 2')
      result.lastName = arrFullName[0]
      result.firstName = arrFullName[1]
    } else if (language === 'en') {
      console.log('en lenght 2')
      result.lastName = arrFullName[1]
      result.firstName = arrFullName[0]
    }
  } else if (arrFullName.length >= 3) {
    if (language === 'vi') {
      result.lastName = arrFullName[0]
      result.middleName = arrFullName.slice(1, -1).join(' ')
      result.firstName = arrFullName[arrFullName.length - 1]
    } else if (language === 'en') {
      result.lastName = arrFullName[arrFullName.length - 1]
      result.middleName = arrFullName.slice(1, -1).join(' ')
      result.firstName = arrFullName[0]
    }
  }

  return result
}
