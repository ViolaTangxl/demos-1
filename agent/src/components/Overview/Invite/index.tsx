/**
 * @file: component Overview Invite
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'
import cls from 'classnames'

import QRCode from 'qrcode.react'
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
    url, formState,
    qqZoneShareLink,
    makeUrlShort, onCopy
  } = store
  const fields = formState.$

  function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()
    makeUrlShort()
  }

  function renderCopyBtn() {
    if (!url || isFetching || isMakingUrlShort) {
      return (
        <Button
          className={styles.button}
          type="default"
          disabled
        >
          复制链接
        </Button>
      )
    }

    return (
      <CopyToClipboard
        text={url}
        onCopy={(_text: string, result: boolean) => onCopy(result)}
      >
        <Popover
          title="点击按钮复制链接"
          content={url}
        >
          <Button
            className={cls(
              styles.button,
              styles.copy
            )}
            type="default"
          >
            复制链接
          </Button>
        </Popover>
      </CopyToClipboard>
    )
  }

  function renderMakeUrlShortBtn() {
    if (!url || isFetching || isMakingUrlShort) {
      return (
        <Button
          className={styles.button}
          type="default"
          disabled
        >
          生成短链
        </Button>
      )
    }

    return (
      <Button
        className={styles.button}
        htmlType="submit"
        type="default"
      >
        生成短链
      </Button>
    )
  }

  function renderWechatShareBtn() {
    if (!url || isFetching || isMakingUrlShort) {
      return (
        <Button
          className={styles.button}
          type="default"
          disabled
        >
          分享到微信
        </Button>
      )
    }

    const wechatPopoverView = (
      <div className={styles.wechatPopover}>
        <div className={styles.left}>
          <QRCode
            value={url}
            size={64}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>微信分享</div>
          <div className={styles.subTitle}>
            打开微信扫一扫，分享给好友
          </div>
        </div>
      </div>
    )

    return (
      <Popover content={wechatPopoverView}>
        <Button
          className={styles.button}
          type="default"
        >
          分享到微信
        </Button>
      </Popover>
    )
  }

  function renderQQShareBtn() {
    if (!url || isFetching || isMakingUrlShort) {
      return (
        <Button.Link
          className={styles.button}
          href=""
          target="_blank"
          rel="noreferrer noopener"
          disabled
        >
          分享到 QQ
        </Button.Link>
      )
    }

    return (
      <Popover content="点击分享到 QQ 空间">
        <Button.Link
          className={styles.button}
          href={qqZoneShareLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          分享到 QQ
        </Button.Link>
      </Popover>
    )
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

          {renderCopyBtn()}
          {renderMakeUrlShortBtn()}
          {renderWechatShareBtn()}
          {renderQQShareBtn()}
        </Form.Item>
      </Form>
    </div>
  )
})
