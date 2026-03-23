Page({
  data: {
    codeBoxes: [0, 1, 2, 3, 4],
    codeValue: '',
    codeChars: ['', '', '', '', ''],
    activeIndex: 0,
    inputFocused: true,
    canVerify: false,
  },
  onShow() {
    this.focusCodeInput()
  },
  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack({
        delta: 1,
      })
      return
    }

    wx.reLaunch({
      url: '/pages/forgot-password/forgot-password',
    })
  },
  onCodeInput(event) {
    const rawValue = String(event.detail.value || '').replace(/\D/g, '')
    const codeValue = rawValue.slice(0, 5)
    const codeChars = ['', '', '', '', '']

    for (let index = 0; index < codeValue.length; index += 1) {
      codeChars[index] = codeValue[index]
    }

    this.setData({
      codeValue,
      codeChars,
      activeIndex: Math.min(codeValue.length, 4),
      inputFocused: true,
      canVerify: codeValue.length === 5,
    })
  },
  focusCodeInput() {
    this.setData({
      inputFocused: false,
    })

    setTimeout(() => {
      this.setData({
        inputFocused: true,
      })
    }, 30)
  },
  goToPasswordReset() {
    if (!this.data.canVerify) {
      return
    }

    wx.navigateTo({
      url: '/pages/password-reset/password-reset',
    })
  },
})
