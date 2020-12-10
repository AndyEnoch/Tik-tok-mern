import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            <Header spotify={spotify}/>
            
            <div className="body__info">
                <img 
                    // src={discover_weekly?.images[0].url}
                    src="https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg"
                    alt=""
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz />

                    {discover_weekly?.tracks.items.map(item => (
                        <SongRow track={item.track} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body;
