import React from 'react';
//Material UI
import { Grid } from '@material-ui/core';
//Axios youtube API file
import youtube from './api/youtube';
//Components
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
//import VideoList from './components/VideoList';


class App extends React.Component {
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 4,
                key: 'AIzaSyBnrpnHmTgviV-RGjVd43-BH6Ags3BP8Wc',
                q: searchTerm,
            }
        });
        console.log(response);
    }
     
    render() {
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={8}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;