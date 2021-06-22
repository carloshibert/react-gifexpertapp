import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading  } = useFetchGif( category );

    return (
        <>
            <h3 className="animate_animated animate_fadeIn">{ category }</h3>

            { loading && <p>loading</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key = {img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
