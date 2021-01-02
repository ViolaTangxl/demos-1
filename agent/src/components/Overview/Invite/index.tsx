/**
 * @file: component Overview Invite
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'
import cls from 'classnames'

import CopyToClipboard from 'react-copy-to-clipboard'

import { useLocalStore } from 'qn-fe-core/local-store'

import Form from 'react-icecream/lib/form'
import Input from 'react-icecream/lib/input'
import Popover from 'react-icecream/lib/popover'
import Button from 'react-icecream/lib/button'

import { bindFormItem, bindTextInput } from 'portal-base/common/utils/form'

import LocalStore from './store'

import styles from './style.m.less'

export default observer(function Invite() {
  const store = useLocalStore(LocalStore)

  const {
    isFetching, isMakingUrlShort,
    formState,
    makeUrlShort, onCopy
  } = store
  const fields = formState.$

  function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()
    makeUrlShort()
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>邀请用户</div>

      <Form onSubmit={handleSubmit}>
        <Form.Item
          className={styles.formItem}
          {...bindFormItem(fields.url)}
        >
          <Input
            className={styles.input}
            disabled
            {...bindTextInput(fields.url)}
          />

          <CopyToClipboard
            text={fields.url.value}
            onCopy={(_text: string, result: boolean) => onCopy(result)}
          >
            <Popover
              title="点击按钮复制链接"
              content={fields.url.value}
            >
              <Button
                className={cls(
                  styles.button,
                  styles.copy
                )}
                type="default"
                disabled={isFetching || isMakingUrlShort}
              >
                复制链接
              </Button>
            </Popover>
          </CopyToClipboard>

          <Button
            className={styles.button}
            htmlType="submit"
            type="default"
            disabled={isFetching || isMakingUrlShort}
          >
            生成短链
          </Button>

          <Button
            className={styles.button}
            type="default"
            disabled={isFetching || isMakingUrlShort}
          >
            分享到微信
          </Button>

          <Button
            className={styles.button}
            type="default"
            disabled={isFetching || isMakingUrlShort}
          >
            分享到 QQ
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
