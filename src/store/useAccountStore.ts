import { defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import globalStore from './globalStore'

interface AccountRecord {
  accountId: string
  accountName: string
  groupId: string
  groupName: string
  lastIdeaGroup: Record<string, any>
}

interface AccountState {
  currentAccountInfo: RemovableRef<AccountRecord>
  glbFreshCount: RemovableRef<{ freshCount: number; lastFreshTime: number }>
}

export const KEY_ACCOUNT_RECORD = 'account_record'
export const KEY_FRESH_COUNT_RECORD = 'fresh_count_record'

export const useAccountStore = defineStore({
  id: 'account_store',
  state(): AccountState {
    const currentAccountInfo = useStorage(KEY_ACCOUNT_RECORD, {} as AccountRecord)
    const glbFreshCount = useStorage(KEY_FRESH_COUNT_RECORD, {
      freshCount: 0,
      lastFreshTime: Date.now()
    })
    return {
      currentAccountInfo,
      glbFreshCount,
    }
  },
  getters: {},
  actions: {
    checkIsLogin() {
      return new Promise((resolve) => {
        requestAccountInfo()
          .then(res => {
            if (res.code === 0 && res.data) {
              doLog('已登录, res.data =', res.data)
              this.currentAccountInfo.accountId = res.data.user_id
              this.currentAccountInfo.accountName = res.data.user_name
              this.currentAccountInfo.groupId = res.data.group_id
              this.currentAccountInfo.groupName = res.data.group_name
              this.currentAccountInfo.lastIdeaGroup = res.data.last_idea_group || {}
              resolve(res.data)
            } else {
              doLog(`错误码(${res.code})`, res.message)
            }
          })
          .catch(err => {
            doLog('globalStore/useAccountStore.ts', err)
            resolve({})
          })
      })
    },
    freshAdd(newNum: number) {
      if (!Number(newNum)) {
        return
      }
      doLog(this.glbFreshCount.freshCount, Number(newNum))
      this.glbFreshCount.freshCount = this.glbFreshCount.freshCount + Number(newNum)
    },
    freshSub(newNum: number) {
      if (!Number(newNum)) {
        return
      }
      doLog(this.glbFreshCount.freshCount, Number(newNum))
      this.glbFreshCount.freshCount = this.glbFreshCount.freshCount - Number(newNum)
    }
  }
})

// 组件之外调用。不能在组件内部使用
export function useAccountStoreWithOut() {
  return useAccountStore(globalStore)
}
