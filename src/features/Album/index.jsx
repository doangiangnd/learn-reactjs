import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'White Valentine',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/a/d/4/4ad48b73127910b92e286eca152aeeb6.jpg'
        },
        {
            id: 2,
            name: 'Be My Valentine',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/0/3/f/d03f484b7459aaad69f6476b50257b82.jpg'
        },
        {
            id: 3,
            name: 'Love Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/e/7/3/1e737080bf0d8a9aa5183bc586db8d59.jpg'
        }
    ];
    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;