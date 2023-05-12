function reload() {
  chrome.tabs.reload()
}
chrome.webRequest.onCompleted.addListener(
  function (details) {
    if (details.statusCode !== 200) {
      reload()
    }
  },
  { urls: ["https://chat.openai.com/backend-api/conversation"] },
  []
)
chrome.webRequest.onErrorOccurred.addListener(
  function () {
    reload()
  },
  { urls: ["https://chat.openai.com/backend-api/conversation"] },
  []
)
