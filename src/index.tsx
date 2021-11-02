import React, {useState} from "react";
import styled from "styled-components";
import CropperPic from "./CropperPic";


const ProfilePic = styled.div<{
    size: number;
    img: string;
}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    overflow: hidden;
    background:url(${props => props.img});
    background-size: 100%;
    cursor: pointer;
    position: relative;
    &:hover .profile-hover {
        display: flex;
    }
    .profile-hover {
        align-items: center;
        justify-content: center;
        font-size: 12px;
        width: 100%;
        height: 100%;
        color: #fff;
        background: rgba(000, 000, 000, .3);
        text-align: center;
        display: none;
        position: absolute;
        left: 0;
        top: 0;
    }
`;
const ProfilePicSelect = styled.div<{
    size: number;
}>`
    width: 404px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.13);
    border: 1px solid rgba(233, 233, 233, 1);
    padding: 16px;
    position: absolute;
    top: ${props => props.size}px;
    left: 0;
    z-index: 3;
    .cont-title {
        font-size: 14px;
        height: 22px;
        line-height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        .select-del {
            width: 26px;
            height: 26px;
            cursor: pointer;
            svg {
                width: 26px;
                height: 26px;
            }       
        }
    }
    .marl-15 {
        overflow: hidden;
        margin-bottom: 22px;
    }
    .profile-pic-list {
        display: flex;
        flex-wrap: wrap;
        border-bottom: solid 1px rgba(222, 222, 222, .5);
        padding-bottom: 4px;
        margin-left: -15px;
        .profile-pic-item {
            width: 36px;
            height: 36px;
            cursor: pointer;
            border-radius: 50%;
            overflow: hidden;
            margin-left: 16px;
            margin-bottom: 12px;
            &:hover {
                opacity: .6;
            }
            img {
                max-width: 100%;
            }
        }
    }
    .upload-wrap {
        font-size: 12px;
        line-height: 22px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        .upload-btn {
            color: rgba(0, 144, 255, 1);
            cursor: pointer;
            .el-icon-plus {
                margin-right: 8px;
            }
        }
        .upload-tip {
            color: rgb(191, 191, 191);
        }
    }
`;
interface PropsType {
    defaultImg: string;
    size: number;
    getFile: (file: string) => void;
    cropConfirm: (preCropPic: string) => void;
    defaultImgList: string[];
}
function imageToBase64(url: string, callback: (d: string) => void) {
    const Img: HTMLImageElement = new Image();
    let dataURL = '';
    Img.src = `${url}?v=${Math.random()}`;
    Img.setAttribute('crossOrigin', 'Anonymous');
    Img.onload = function() {
      const canvas: HTMLCanvasElement = document.createElement('canvas'),
        width = Img.width,
        height = Img.height;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d')!.drawImage(Img, 0, 0, width, height);
      dataURL = canvas.toDataURL('image/png');
      return callback ? callback(dataURL) : null;
    };
}
const Avatar: React.FC<PropsType> = (props) => {
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState(props.defaultImg || props.defaultImgList[0]);
    const [cropShow, setCropShow] = useState(false);
    const [uploadPic, setUploadPic] = useState('');
    const profilePicUpload = (e: { target: any; }) => {
        const target = e.target;
        const files = target.files[0];
        if (files.size / 1024 > 1024) {
            alert('文件不能大于1M');
          return false;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files);
        fr.onload = (e: {target: any}) => {
            setCropShow(true);
            setShow(false);
            setUploadPic(e.target.result as string);
        };
      };
    return <>
        <div style={{position: 'relative'}}>
            <ProfilePic size={props.size} img={pic}>
                <div onClick={() => setShow(true)} className="profile-hover">修改</div>
            </ProfilePic>
            {
                show && <ProfilePicSelect size={props.size}>
                    <div className="cont-title">
                        <span>修改头像</span>
                        <i
                        className="crop-close select-del"
                        onClick={() => {
                            setShow(false);
                        }}
                        >
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17639" width="200" height="200"><path d="M766.464 291.84l-36.352-36.352-217.088 217.088-217.088-217.088-36.352 36.352 217.088 217.088-217.088 217.088 36.352 36.352 217.088-217.6 217.088 217.6 36.352-36.352-217.088-217.088 217.088-217.088z" fill="#BEBEBE" p-id="17640"></path></svg>
                        </i>
                    </div>
                    <div className="marl-15">
                        <div className="profile-pic-list">
                        {props.defaultImgList.map((pic, index) => {
                            return <div
                            className="profile-pic-item"
                            key={index}
                            onClick={() => {
                                imageToBase64(pic, dataURL => {
                                    setPic(dataURL);
                                    setShow(false);
                                    props.getFile(dataURL);
                                })
                            }}
                            >
                                <img src={pic} />
                            </div>

                        })}
                        </div>
                    </div>
                    <div className="upload-wrap">
                        <label className="upload-btn" htmlFor="uploadProfilePic">
                        <i className="el-icon-plus" />
                        上传自定义头像
                        </label>
                        <input
                        type="file"
                        hidden
                        id="uploadProfilePic"
                        accept="images/png"
                        onChange={profilePicUpload}
                        />
                        <div className="upload-tip">仅支持png格式，文件小于1M，建议为正方形</div>
                    </div>
                </ProfilePicSelect>
            }
        </div>
        {cropShow && (
            <CropperPic
            src={uploadPic}
            title="上传自定义头像"
            tip="仅支持png格式，文件小于1M，建议为正方形"
            confirm={(preCropPic: string) => {
                setPic(preCropPic);
                props.cropConfirm(preCropPic);
                setCropShow(false);
            }}
            cancel={() => {
                setCropShow(false);
            }}
            reUpload={profilePicUpload}
            borderRadius
            />
        )}
    </>
}
export default Avatar;