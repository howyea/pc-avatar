## start


```bash
npm instart pc-avatar

 #or
  
yarn add pc-avatar
```

## usage

```js

<Avatar
    defaultImg=""  
    defaultImgList={[]} 
    size={60}
    cropConfirm={async preCropPic => {}}
    getFile={async (file: string) => {}}
/>

//------------------------------------------
interface PropsType {
    /**
     * defaultImg, set the default image
     */
    defaultImg: string;
    /**
     * size, set the size of image
     */
    size: number;
    /**
     * getFile, choice the image from defaultImgList
     */
    getFile: (file: string) => void;
    /**
     * cropConfirm, choice the image from upload
     */
    cropConfirm: (preCropPic: string) => void;
    /**
     * defaultImgList, A list of maps available
     */
    defaultImgList: string[];
}
```

