/** @jsx jsx */
// Important: must include pages/_app.tsx
import { jsx, css } from '@emotion/core'
import 'react-dates/initialize'
import React, { createRef } from 'react'
import { DayPickerSingleDateController } from 'react-dates'
import moment from 'moment'

import RoundInput from '../_input/round-input'
import { MEDIA_DESKTOP, MEDIA_MOBILE, FONT_R, FONT_EB, FONT_B, isDesk, COLOR_WHITE,
  COLOR_GRAY_100, COLOR_PRIMARY, COLOR_PRIMARY_BG, COLOR_GRAY_300, COLOR_TEXT,
  COLOR_BG, COLOR_GRAY, CSS_BOX_SHADOW_CARD } from '../../src/var'
import { ComponentBase, DEFAULT_COMPONENT_MARGIN, DEFAULT_COMPONENT_MARGIN_M, DEFAULT_FONT_SIZE,
  DEFAULT_FONT_SIZE_M } from '../@type/component-base'
import RoundSelect from '../_input/round-select'

moment.locale('ko');

const DEFAULT_CSS = css`{
  .input_wrapper_horizontal {
    flex: 1 1 auto;

    display: flex;
    align-items: center;

    background-color: ${COLOR_WHITE};
    ${MEDIA_DESKTOP} {
      height: 48px;
      padding: 10px;

      border-radius: 10px;
    }
    ${MEDIA_MOBILE} {
      height: 10vw;
      padding: 2vw;

      border-radius: 2vw;
    }
  }

  .input_wrapper_vertical {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;

    background-color: ${COLOR_WHITE};
    ${MEDIA_DESKTOP} {
      padding: 12px 16px;

      border-radius: 10px;
    }
    ${MEDIA_MOBILE} {
      padding: 2vw;

      border-radius: 2vw;
    }
  }

  .divider_horizontal {
    width: 2px;
    height: 100%;
    margin: 0 .5em;

    background-color: ${COLOR_GRAY_100};
  }

  .divider_vertical {
    width: 100%;
    height: 2px;
    margin: .5em 0;

    background-color: ${COLOR_GRAY_100};
  }

  .inputs {
    width: auto;
    min-width: 0;

    flex: 1 1 auto;

    background-color: transparent;
    border: none;

    color: ${COLOR_TEXT};
    font-family: ${FONT_R};
    cursor: pointer;
    ${MEDIA_DESKTOP} {
      margin: 0;
      font-size: 19px;
    }
    ${MEDIA_MOBILE} {
      margin: 0;
      font-size: 3.06vw;
    }
  }

  .label {
    margin: 0;

    text-align: left:
    ${MEDIA_DESKTOP} {
      font-size: 19px;
    }
    ${MEDIA_MOBILE} {
      font-size: 3.06vw;
    }
  }

  .inputs::placeholder {
    color: ${COLOR_GRAY_300};
    opacity: 1;
  }

  .inputs--single {
    line-height: 1;
    ${MEDIA_DESKTOP} {
      padding: 12px;
    }
    ${MEDIA_MOBILE} {
      padding: 3vw 2vw;
    }
  }

  .inputs--multi {
    line-height: 1.5;
    resize: none;
    scrollbar-width: thin;
    scrollbar-color: ${COLOR_WHITE} transparent;
    ${MEDIA_DESKTOP} {
      height: 122px;
      padding: 0;
    }
    ${MEDIA_MOBILE} {
      height: 17.50vw;
      padding: 0;
    }
  }



  .submit {
    background-color: ${COLOR_PRIMARY};
    border: none;

    color: ${COLOR_PRIMARY_BG};
    font-family: ${FONT_EB};
    line-height: 1;
    ${MEDIA_DESKTOP} {
      padding: 8px;
      font-size: 22px;
    }
    ${MEDIA_MOBILE} {
      padding: 2vw 8vw;
      font-size: 3.33vw;
    }
  }
}`

type Props = ComponentBase & {
  title: React.ReactElement
  placeholderColor?: string
}
type State = {
  moment: moment.Moment
  dateFocused: boolean
  dayPickerTop: number
  dayPickerLeft: number
  dayPickerInputFocus: boolean
  form: {
    name: string
    place: string
    phone: string
    agree: boolean
  }
}

class RoundContact extends React.Component<Props, State> {
  bindHandleLayoutUpdate: () => void
  _dayPickerInputRef: React.Ref<any>
  _dayPickerRef: React.Ref<any>

  constructor (props: Readonly<Props>) {
    super(props)
    this.state = {
      moment: null,
      dateFocused: false,
      dayPickerTop: 0,
      dayPickerLeft: 0,
      dayPickerInputFocus: false,
      form: {
        name: '',
        place: '거주지역',
        phone: '',
        agree: false
      }
    }

    this.bindHandleLayoutUpdate = this._handleLayoutUpdate.bind(this)
    this._dayPickerInputRef = createRef()
    this._dayPickerRef = createRef()
  }

  _handleLayoutUpdate (): void {
    try {
      if (!this._dayPickerRef || !this._dayPickerInputRef) return
      // @ts-ignore
      const dayPickerElement = this._dayPickerRef.current
      // @ts-ignore
      const dayPickerInputElement = this._dayPickerInputRef.current
      const dpeBound = dayPickerElement.getBoundingClientRect()
      const dpieBound = dayPickerInputElement.getBoundingClientRect()
      if (isDesk()) {
        this.setState({
          dayPickerTop: dpieBound.top + dpieBound.height,
          dayPickerLeft: (dpieBound.left + dpieBound.width) - dpeBound.width
        })
      } else {
        this.setState({
          dayPickerTop: dpieBound.top - dpeBound.height,
          dayPickerLeft: window.innerWidth/2 - dpeBound.width/2
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  componentDidMount (): void {
    try { window && document } catch { return }
    window.addEventListener('resize', this.bindHandleLayoutUpdate)
    window.addEventListener('scroll', this.bindHandleLayoutUpdate)
    this.bindHandleLayoutUpdate()
  }

  componentWillUnmount (): void {
    try { window && document } catch { return }
    window.removeEventListener('resize', this.bindHandleLayoutUpdate)
    window.removeEventListener('scroll', this.bindHandleLayoutUpdate)
  }

  render (): React.ReactElement {
    return (<div id='contact' className='round_contact' css={[css`{
      position: relative;
      overflow: show;

      background-color: ${this.props.bgColor || COLOR_BG};

      color: ${this.props.color || COLOR_TEXT};
      ${MEDIA_DESKTOP} {
        padding: ${this.props.componentMargin || DEFAULT_COMPONENT_MARGIN};

        font-size: ${this.props.fontSize || DEFAULT_FONT_SIZE};
      }
      ${MEDIA_MOBILE} {
        padding: ${this.props.componentMarginM || DEFAULT_COMPONENT_MARGIN_M};

        font-size: ${this.props.fontSizeM || DEFAULT_FONT_SIZE_M};
      }
    }`, this.props.additionalCss]}>
      <div className='rc__limiter' css={css`{
        position: relative;
        margin: 0 auto;
        ${MEDIA_DESKTOP} {
          width: 1200px;
        }
        ${MEDIA_MOBILE} {
          width: 90%;
        }
      }`}>
        <div className='rc__title' css={css`{
          font-family: ${FONT_B};
          line-height: 1.5;
          text-align: center;
          ${MEDIA_DESKTOP} {
            font-size: 40px;
          }
          ${MEDIA_MOBILE} {
            font-size: 5.5vw;
          }
        }`}>{ this.props.title }</div>

        <form className='rc__group_form' css={css`{
          display: flex;
          flex-direction: column;
          align-items: stretch;
          ${MEDIA_DESKTOP} {
            width: 400px;
            margin: 40px auto 0 auto;
          }
          ${MEDIA_MOBILE} {
            margin-top: 9vw;
          }
        }`}>
          <RoundInput
              name='name'
              type='text'
              placeholder='성명'
              required
              value={ this.state.form.name }
              onChange={event => {
                this.state.form.name = event.target.value
                this.setState({form: this.state.form})
              }}
              bgColor={'transparent'}
              color={this.props.color || COLOR_TEXT}
              placeholderColor={this.props.placeholderColor || COLOR_GRAY}
              border={'solid 2px ' + (this.props.placeholderColor || COLOR_GRAY)}
          />
          <div className='rc__horizontal' css={css`{
            display: flex;
            justify-content: stretch;
          }`}>
            <label className='rc__chevron_container' css={css`{
              width: 100px;
              margin: .5em;
              padding-right: .5em;

              flex: 1 1 auto;

              display: flex;
              align-items: center;

              border: ${'solid 2px ' + (this.props.placeholderColor || COLOR_GRAY)};
              border-radius: 2em;

              cursor: pointer;
            }`}>
              <RoundInput
                  className='day_picker_input'
                  ref={this._dayPickerInputRef}
                  name='day'
                  type='text'
                  placeholder='상담날짜'
                  required
                  value={ this.state.moment ? this.state.moment.format('YYYY/MM/DD') : '' }
                  onChange={() => {}} onClick={() => {
                    this.setState({
                      dateFocused: !this.state.dateFocused
                    })
                  }}
                  onFocus={() => {
                    this.setState({
                      dayPickerInputFocus: true
                    })
                  }}
                  bgColor={'transparent'}
                  color={this.props.color || COLOR_TEXT}
                  placeholderColor={this.props.placeholderColor || COLOR_GRAY}
                  css={css`{
                    margin: 0 !important;

                    flex: 1 1 auto;
                  }`}
              />
              <span className='mdi mdi-chevron-down' css={css`{
                color: ${this.props.placeholderColor || COLOR_GRAY};
                font-size: 1.5em;
              }`}></span>
            </label>
            <label className='rc__chevron_container' css={css`{
              width: 100px;
              margin: .5em;
              padding-right: .5em;

              flex: 1 1 auto;

              display: flex;
              align-items: center;

              border: ${'solid 2px ' + (this.props.placeholderColor || COLOR_GRAY)};
              border-radius: 2em;

              cursor: pointer;
            }`}>
              <RoundSelect
                  name='place'
                  placeholder='거주지역'
                  required
                  value={ this.state.form.place }
                  onChange={event => {
                    this.state.form.place = event.target.value
                    this.setState({form: this.state.form})
                  }}
                  bgColor={'transparent'}
                  color={this.props.color || COLOR_TEXT}
                  placeholderColor={this.props.placeholderColor || COLOR_GRAY}
                  css={css`{
                    margin: 0 !important;

                    flex: 1 1 auto;
                  }`}
              >
                <option disabled hidden>거주지역</option>
                <option>서울</option>
              </RoundSelect>
              <span className='mdi mdi-chevron-down' css={css`{
                color: ${this.props.placeholderColor || COLOR_GRAY};
                font-size: 1.5em;
              }`}></span>
            </label>
          </div>
          <RoundInput
              name='phone'
              type='text'
              placeholder='연락처'
              required
              value={ this.state.form.phone }
              onChange={event => {
                this.state.form.phone = event.target.value
                this.setState({form: this.state.form})
              }}
              bgColor={'transparent'}
              color={this.props.color || COLOR_TEXT}
              placeholderColor={this.props.placeholderColor || COLOR_GRAY}
              border={'solid 2px ' + (this.props.placeholderColor || COLOR_GRAY)}
          />
          <label className='checkboxes' css={css`{
            flex: 1 0 auto;

            display: flex;
            align-items: center;

            cursor: pointer;
            ${MEDIA_DESKTOP} {
              margin: 8px;
            }
            ${MEDIA_MOBILE} {
              margin: 2vw;
            }

            & input {
              position: absolute;
              width: 0;
              height: 0;
              opacity: 0;
            }

            /* Default */
            & .checkboxes__virtual {
              position: relative;
              width: 1.2em;
              height: 1.2em;

              background-color: transparent;
              ${CSS_BOX_SHADOW_CARD}

              line-height: 1;
              ${MEDIA_DESKTOP} {
                border: solid 2px ${COLOR_WHITE};
                font-size: 19px;
              }
              ${MEDIA_MOBILE} {
                border: solid 1px ${COLOR_WHITE};
                font-size: 2.78vw;
              }
            }

            /* Hover */
            &:hover .checkboxes__virtual {
              background-color: rgba(255,255,255,.3);
            }

            /* Checked */
            & input:checked ~ .checkboxes__virtual {
              background-color: ${COLOR_WHITE};
            }

            /* Checked (Shape) */
            & input:checked ~.checkboxes__virtual::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 40%;
              height: 70%;
              transform-origin: 0 0;
              transform: translate3d(.5em,.4em,0) rotate(45deg) translate3d(-50%,-50%,0);

              border: solid ${COLOR_PRIMARY};
              border-width: 0 3px 3px 0;
            }

            & .checkboxes__content {
              margin-left: .5em;

              color: ${this.props.color || COLOR_TEXT};
              font-family: ${FONT_R};
              line-height: 1;
              user-select: none;
              ${MEDIA_DESKTOP} {
                font-size: 15px;
              }
              ${MEDIA_MOBILE} {
                font-size: 3vw;
              }
            }
          }`}>
            <input type='checkbox' />
            <div className='checkboxes__virtual'></div>
            <div className='checkboxes__content' css={css`{
            }`}>
              &nbsp;
              <a css={css`{
                color: inherit;
                text-decoration: underline;
              }`}>개인정보처리방침</a>
              과&nbsp;
              <a css={css`{
                color: inherit;
                text-decoration: underline;
              }`}>이용약관</a>
              을 확인했으며 동의합니다.
            </div>
          </label>
          <RoundInput
              name='submit'
              type='submit'
              value='문의 신청'
              bgColor={COLOR_PRIMARY}
              color={COLOR_PRIMARY_BG}
              css={css`{
            flex: 1 0 auto;

            font-family: ${FONT_B};
            text-align: center;
          }`} />
        </form>
        <div className='day_picker' css={css`{
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index:93;
          overflow: hidden;

          visibility: ${this.state.dayPickerInputFocus ? 'none' : 'hidden'};
        }`}>
          <div className='day_picker__bg' onClick={() => {
            this.setState({
              dayPickerInputFocus: false
            })
          }}css={css`{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }`}></div>
          <div
              className='day_picker__container'
              ref={this._dayPickerRef}
              css={css`{
            position: fixed;
            /* Detail position is set by javascript */
            top: ${this.state.dayPickerTop}px;
            left: ${this.state.dayPickerLeft}px;
            z-index: 94;

            transition: all .1s;
          }`}>
            <DayPickerSingleDateController date={this.state.moment} focused={this.state.dateFocused}
                onDateChange={moment => {
                  this.setState({
                    moment,
                    dayPickerInputFocus: false
                  })
                }}
                onFocusChange={({focused: dateFocused}) => { this.setState({dateFocused}) }}
                numberOfMonths={1} isOutsideRange={(day: moment.MomentInput) => { return moment().isAfter(day) }} />
          </div>
        </div>
      </div>
    </div>)
  }
}

export default RoundContact
