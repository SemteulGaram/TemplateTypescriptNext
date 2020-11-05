/** @jsxImportSource @emotion/core */
// Important: must include pages/_app.tsx
import { jsx, css } from '@emotion/core'
import 'react-dates/initialize'
import React from 'react'
import { DayPickerSingleDateController } from 'react-dates'
import moment from 'moment'

import { MEDIA_DESKTOP, MEDIA_MOBILE, FONT_R, FONT_EB, FONT_B, isDesk, COLOR_WHITE, COLOR_GRAY_100, COLOR_PRIMARY, COLOR_PRIMARY_BG, COLOR_GRAY_300, COLOR_TEXT } from '../../src/var'

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

  label.checkboxes {
    display: flex;
    align-items: center;

    cursor: pointer;
    ${MEDIA_DESKTOP} {
      margin: 8px;
    }
    ${MEDIA_MOBILE} {
      margin: 2vw;
    }
  }

  label.checkboxes input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  /* Default */
  label.checkboxes .checkboxes__virtual {
    position: relative;
    width: 1.2em;
    height: 1.2em;
    background-color: transparent;
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
  label.checkboxes:hover .checkboxes__virtual {
    background-color: rgba(255,255,255,.3);
  }

  /* Checked */
  label.checkboxes input:checked ~ .checkboxes__virtual {
    background-color: ${COLOR_WHITE};
  }

  /* Checked (Shape) */
  label.checkboxes input:checked ~.checkboxes__virtual::after {
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

  label.checkboxes .checkboxes__content {
    margin-left: .5em;

    color: #FFFFFF;
    font-family: ${FONT_R};
    line-height: 1;
    user-select: none;
    ${MEDIA_DESKTOP} {
      font-size: 19px;
    }
    ${MEDIA_MOBILE} {
      font-size: 2.78vw;
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

type Props = {}
type State = {
  moment: moment.Moment
  dateFocused: boolean
  dayPickerTop: number
  dayPickerLeft: number
  dayPickerInputFocus: boolean
}

class Contact2 extends React.Component<Props, State> {
  bindHandleLayoutUpdate: () => void

  constructor (props: Readonly<Props>) {
    super(props)
    this.state = {
      moment: null,
      dateFocused: false,
      dayPickerTop: 0,
      dayPickerLeft: 0,
      dayPickerInputFocus: false
    }

    this.bindHandleLayoutUpdate = this._handleLayoutUpdate.bind(this)
  }

  _handleLayoutUpdate (): void {
    try {
      const dayPickerElement = document.querySelector('#day_picker')
      const dayPickerInputElement = document.querySelector('#day_picker_input')
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
    return (<div id='contact' className='contact1' css={[DEFAULT_CSS, css`{
      position: relative;
      width: 100%;
      overflow: show;
      ${MEDIA_DESKTOP} {
        height: 585px;
      }
      ${MEDIA_MOBILE} {
        height: 154.17vw;
      }
    }`]}>
      <div className='contact1__bg' css={css`{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-image: url("/img/example3.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }`}></div>
      <div className='contact1__limiter' css={css`{
        position: relative;
        height: 100%;
        ${MEDIA_DESKTOP} {
          width: 1200px;
          margin: 0 auto;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ${MEDIA_MOBILE} {
        }
      }`}>
        <div className='contact1__group_title'>
          <div className='contact1__title' css={css`{
            color: ${COLOR_WHITE};
            font-family: ${FONT_EB};
            line-height: 1;
            ${MEDIA_DESKTOP} {
              margin: 0 0 30px 0;

              font-size: 40px;
            }
            ${MEDIA_MOBILE} {
              width: 79.17vw;
              margin: 0 auto;
              padding-top: 14.44vw;

              font-size: 5.5vw;
              text-align: left;
            }
          }`}>상담문의</div>
          <div className='contact1__subtitle' css={css`{
            color: ${COLOR_GRAY_100};
            font-family: ${ FONT_B };
            ${MEDIA_DESKTOP} {
              font-size: 22px;
              line-height: 1.64;
            }
            ${MEDIA_MOBILE} {
              width: 79.17vw;
              margin: 0 auto;
              padding-top: 4.17vw;

              font-size: 2.50vw;
              line-height: 1.67;
              text-align: left;
            }
          }`}>
            안내문1<br/>
            안내문2<br/>
            안내문3
          </div>
        </div>
        <div className='contact1__group_form' css={css`{
          ${MEDIA_DESKTOP} {
            width: 575px;
          }
          ${MEDIA_MOBILE} {
            width: 79.17vw;
            padding-top: 7.50vw;
            margin: 0 auto;
          }
        }`}>
          <form css={css`{
            display: flex;
            flex-direction: column;
          }`}>
            <div className='contact1__group1' css={css`{
              display: flex;
              ${MEDIA_MOBILE} {
                flex-direction: column;
              }
            }`}>
              <div className='input_wrapper_horizontal'>
                <div css={css`{
                  width: 2em;
                  height: 2em;

                  background-image: url("/img/phone.png");
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                }`}></div>
                <div className='divider_horizontal'></div>
                <input className='inputs inputs--single' type='text' placeholder='입력칸 1' />
              </div>
            </div>
            <div className='contact1__group2' css={css`{
              display: flex;
              ${MEDIA_MOBILE} {
                flex-direction: column;
              }
            }`}>
              <input id='day_picker_input' className='inputs inputs--single' type='text' placeholder='상담 날짜' value={ this.state.moment ? this.state.moment.format('YYYY/MM/DD') : '' }
                  onChange={() => {}} onClick={() => {
                    this.setState({
                      dateFocused: !this.state.dateFocused
                    })
                  }} onFocus={() => {
                    this.setState({
                      dayPickerInputFocus: true
                    })
                  }} />
            </div>
            <div className='contact1__group3' css={css`{
              display: flex;
              ${MEDIA_MOBILE} {
                flex-direction: column;
              }
            }`}>
              <div className='input_wrapper_vertical'>
                <div className='label'>문의사항</div>
                <div className='divider_vertical'></div>
                <textarea className='inputs inputs--multi' placeholder={'긴 빈칸'}></textarea>
              </div>
            </div>
            <div className='contact1__group4' css={css`{
              display: flex;
              align-items: center;
              ${MEDIA_MOBILE} {
                align-items: flex-start;
              }
            }`}>
              <label className='checkboxes' css={css`{
                flex: 1 0 auto;
              }`}>
                <input type='checkbox' />
                <div className='checkboxes__virtual'></div>
                <div className='checkboxes__content' css={css`{
                }`}>
                  <a css={css`{
                    color: #FFFFFF;
                    text-decoration: underline;
                  }`}>개인정보처리방침</a>
                  &nbsp;동의
                </div>
              </label>
              <input className='submit' type='submit' value='문의 신청' css={css`{
                flex: 1 0 auto;
                ${MEDIA_DESKTOP} {
                  height: 50px;
                  margin: 8px;
                }
                ${MEDIA_MOBILE} {
                  height: 11.11vw;
                  margin: 2vw;
                }
              }`} />
            </div>
          </form>
          <div id='day_picker' className='day_picker_container' css={css`{
            position: fixed;
            /* Detail position is set by javascript */
            top: ${this.state.dayPickerTop}px;
            left: ${this.state.dayPickerLeft}px;
            z-index: 94;

            visibility: ${this.state.dayPickerInputFocus ? 'none' : 'hidden'};

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

export default Contact2
