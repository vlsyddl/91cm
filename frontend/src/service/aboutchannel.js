import axios from 'axios'
class AboutChannel{
    // 임시로 제가 만든 채널리스트 가져오는 api입니다.
    // 추후에 코드 합치고나서 만들어주신 api 쓸 예정입니다.
    getChannelList () {
        return axios.get('http://localhost:9191/api/channel/list')
    }
   
    createChannel (channelTitle,email) {
        return axios.post('http://localhost:9191/api/channel/create', {
            name: channelTitle,
            member_email: email
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }
    updateChannelAPI (currentChannel) {
      return axios.post('http://localhost:9191/api/channel/update', currentChannel,
      {
        headers: {'Content-Type': 'application/json'}
      })
    }

    updateLastAccessDate (currentId,oldId) {
      console.log(oldId)
      axios.put('http://localhost:9191/api/channel/update/lastaccessdate',
      {
        oldChannelId: oldId,
        currentChannelId: currentId
      }
      ).catch(error => {
        console.log(error.response)   
      })
    }

    updateSessionIsCW (bool) {
      console.log(bool)
      axios.put("http://localhost:9191/api/channel/update/sessioniscw",
      {
        isContentWrapper: bool
      }
      ).catch(error => {
         console.log(error.response)   
      })
    }

    updateLastAccessStatus (oldVal,newVal) {
      if(oldVal == 'main' && newVal != 'main' ){
        this.updateSessionIsCW(false)
      }else if(oldVal != 'main' && newVal == 'main'){
        this.updateSessionIsCW(true)
      }
    }
    
    initCurrentChannel (currentChannel){
      axios.post("http://localhost:9191/api/channel/update/sessioncc",
      {
        currentChannelId: currentChannel
      }
      ).catch(error => {
        console.log(error.response)   
      })
    }

    updateFocus (bool) {
      axios.post("http://localhost:9191/api/channel/update/sessionfocus",
      {
        isFocus: bool
      }
      ).catch(error => {
        console.log(error.response)   
      })
    }
    
}

export default new AboutChannel()
