// index.js
Page({
  data: {
    selectedTab: 'login',
    showError: false,
    email: '',
    password: '',
    tabs: [
      { key: 'login', label: '登陆', active: true },
      { key: 'signup', label: '注册', active: false },
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
  onEmailInput(e) {
    this.setData({ email: e.detail.value })
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },
  onContinue() {
    const { email, password } = this.data
    if (!email || !password) {
      this.setData({ showError: true })
    } else {
      this.setData({ showError: false })
      // 执行登录逻辑
    }
  },
})
