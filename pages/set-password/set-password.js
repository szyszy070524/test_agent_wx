Page({
  data: {
    password: '',
    confirmPassword: '',
  },
  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack({
        delta: 1,
      })
      return
    }

    wx.reLaunch({
      url: '/pages/password-reset/password-reset',
    })
  },
  submitPasswordUpdate() {
    wx.navigateTo({
      url: '/pages/password-success/password-success',
    })
  },
})
