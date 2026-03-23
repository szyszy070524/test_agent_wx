// index.js
Page({
  data: {
    selectedTab: 'login',
    tabs: [
      { key: 'login', label: 'Log in', active: true },
      { key: 'signup', label: 'Sign up', active: false },
    ],
    socialProviders: [
      { key: 'apple', label: 'Login with Apple', mark: 'A' },
      { key: 'google', label: 'Login with Google', mark: 'G' },
    ],
  },
  switchTab(event) {
    const { key } = event.currentTarget.dataset

    this.setData({
      selectedTab: key,
      tabs: this.data.tabs.map((tab) => ({
        ...tab,
        active: tab.key === key,
      })),
    })
  },
  goToForgotPassword() {
    wx.navigateTo({
      url: '/pages/forgot-password/forgot-password',
    })
  },
})
