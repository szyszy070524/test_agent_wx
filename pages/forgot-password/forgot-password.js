Page({
  data: {
    email: '',
    canSubmit: false,
  },
  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack({
        delta: 1,
      })
      return
    }

    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  onEmailInput(event) {
    const email = event.detail.value || ''
    this.setData({
      email,
      canSubmit: email.length > 6,
    })
  },
  goToVerifyCode() {
    if (!this.data.canSubmit) {
      return
    }

    wx.navigateTo({
      url: '/pages/verify-code/verify-code',
    })
  },
})
