import React, { ChangeEventHandler, Component, CSSProperties } from 'react';
import Cropper from 'react-cropper';
import styled, {createGlobalStyle} from "styled-components";
const GlobalStyles = createGlobalStyle`
 .cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}

.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}

.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}

.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}

.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}

.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}

.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}

.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}

.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}

.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}

.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}

.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}

.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}

.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}

.cropper-line {
  background-color: #39f;
}

.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}

.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}

.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}

.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}

.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}

.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}

.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}

.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}

.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}

.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}

.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}

.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}

.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}

@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}

@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}

@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}

.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}

.cropper-invisible {
  opacity: 0;
}

.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}

.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

.cropper-hidden {
  display: none !important;
}

.cropper-move {
  cursor: move;
}

.cropper-crop {
  cursor: crosshair;
}

.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
 

`
export const StyledBox = styled.div`
  .crop-wrap{
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    padding: 16px 0;
    border-radius: 4px;
    .crop-close{
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 3px;
    }
    .crop-title{
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color:rgb(38,38,38);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px 16px 24px;
      border-bottom: 1px solid #e5e5e5;
      i {
        width: 26px;
        height: 26px;
        cursor: pointer;
        svg {
            width: 26px;
            height: 26px;
        } 
      }
    }
    .crop-cont{
      display: flex;
      justify-content: space-between;
      padding: 32px 24px 16px 24px;
      .option-cont{
        width: 140px;
        margin-left: 30px;
        .pre-cont{
          img{
            width: 100%;
          }
          .border-radius{
            border-radius: 50%;
          }
        }
        .pre-tip{
          text-align: center;
          color: #8c8c8c;
          font-size: 12px;
          line-height: 20px;
          margin-top: 16px;
          margin-bottom: 16px;
        }
      }
    }
    .reupload-cont{
      text-align: center;
    }
    .crop-tip{
      line-height: 18px;
      font-size: 14px;
      color: #8c8c8c;
      text-align: left;
      padding-left: 18px;
      margin-bottom: 24px;
    }
    .crop-option{
      display: flex;
      justify-content: flex-end;
      padding: 0 24px;
    }
  }
  .crop-bg{
    width: 100vw;
    height: 100vh;
    background: rgba(000, 000, 000, .6);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
`;
export const ReUploadBtn = styled.label`
  &:hover {
    color: white;
    border-color: #4d6282;
    background-color: #4d6282;
  }
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  color: #595959;
  margin: 0;
  padding: 8px 15px;
  height: 30px;
  border-radius: 4px;
  background-color: #f0f2f5;
  transition: all 0.3s;
  font-size: 14px;
  box-sizing: border-box;
`;
export const Cancel = styled.button`
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  color: #595959;
  margin: 0;
  padding: 8px 15px;
  height: 30px;
  border-radius: 4px;
  background-color: #f0f2f5;
  transition: all 0.3s;
  font-size: 14px;
  box-sizing: border-box;
  margin-right: 10px;
`;
export const Button = styled.button`
  color: white;
  border-color: #61799b;
  background-color: #61799b;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  margin: 0;
      margin-left: 0px;
  padding: 8px 15px;
  height: 30px;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 14px;
`;
interface PropsType {
  show: Boolean;
  title: string;
  tip: string;
  src: string;
  accept: string;
  confirm: (preCropPic: string) => void;
  cancel: (preCropPic?: string) => void;
  reUpload: ChangeEventHandler<HTMLInputElement>;
  loading: Boolean;
  style?: CSSProperties;
  className?: string;
  aspectRatio?: number;
  borderRadius?: Boolean;
}
interface StateType {
  src: string;
  preCropPic: string;
  once: Boolean;
}
export default class CropperPic extends Component<PropsType, StateType> {
  
  static defaultProps = {
    show: false,
    src: '',
    title: '上传图片',
    accept: 'images/png',
    tip: '仅支持png格式，文件小于1M',
    style: { height: 263, width: 263 },
    borderRadius: false,
    loading: false,
    fileName: '',
  };
  myRef: React.RefObject<any> = React.createRef();
  state = {
    src: this.props.src,
    preCropPic: '',
    once: true,
  };
  _crop() {
    // image in dataUrl
    const picSrc = this.myRef.current.cropper.getCroppedCanvas().toDataURL();
    this.setState({
      preCropPic: picSrc,
    });
  }

  render() {
    const { preCropPic } = this.state;
    const {
      src,
      title,
      tip,
      style,
      aspectRatio,
      accept,
      confirm,
      cancel,
    } = this.props;
    let ratio = 1;
    if (aspectRatio && Object.prototype.toString.call(ratio) === '[object Number]') {
      ratio = aspectRatio;
    }
    return (
      <StyledBox>
        <GlobalStyles/>
        <div className="crop-wrap">
          <div className="crop-title">
            <span>{title}</span>
            <i onClick={() => cancel(preCropPic)} >
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17639" width="200" height="200"><path d="M766.464 291.84l-36.352-36.352-217.088 217.088-217.088-217.088-36.352 36.352 217.088 217.088-217.088 217.088 36.352 36.352 217.088-217.6 217.088 217.6 36.352-36.352-217.088-217.088 217.088-217.088z" fill="#BEBEBE" p-id="17640"></path></svg>
            </i>
          </div>
          <div className="crop-cont">
            <Cropper
              ref={this.myRef}
              src={src}
              style={style}
              // Cropper.js options
              aspectRatio={ratio}
              guides={false}
              crop={this._crop.bind(this)}
            />
            <div className="option-cont">
              <div className="pre-cont">
                <img src={preCropPic} />
              </div>
              <div className="pre-tip">预览</div>
              <div className="reupload-cont">
                <ReUploadBtn
                  htmlFor="reupload"
                >
                  重新上传
                </ReUploadBtn>
                <input
                  type="file"
                  id="reupload"
                  hidden
                  accept={accept}
                  onChange={this.props.reUpload}
                />
              </div>
            </div>
          </div>
          <p className="crop-tip">{tip}</p>
          <div className="crop-option">
            <Cancel
              onClick={() => {
                cancel(preCropPic);
              }}
            >
              取消
            </Cancel>
            <Button
              onClick={() => {
                confirm(preCropPic);
              }}
            >
              确定
            </Button>
          </div>
        </div>
        <div className="crop-bg" />
        
      </StyledBox>
    );
  }
}
