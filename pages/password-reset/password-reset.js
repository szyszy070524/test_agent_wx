Page({
  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack({
        delta: 1,
      })
      return
    }

    wx.reLaunch({
      url: '/pages/verify-code/verify-code',
    })
  },
  goToSetPassword() {
    wx.navigateTo({
      url: '/pages/set-password/set-password',
    })
  },
})
