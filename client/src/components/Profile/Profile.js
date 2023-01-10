import React from 'react'
import { BsJournals } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { GrAttachment } from 'react-icons/gr'


import defaultUserImg from '../../assets/images/default.jpg'
import classes from './Profile.module.scss'

const Journal = React.lazy( () => import('../Journal/JournalEntry') )
const Friend = React.lazy( () => import('../Travellers/Traveller') )
const Backdrop = React.lazy( () => import('../Backdrop/Backdrop') )
const FormTemplate = React.lazy( () => import('../FormTemplate/FormTemplate') )

function Profile() {
    const [ tab, setTab ] = React.useState('journals')
    const [ showEditOptions, setShowEditOptions ] = React.useState( false )
    const  uploadImgInput = React.useRef()

    // Change username, password, lucidity level and user image. Number of journals and Friends
    return (
    <div className={ classes.profile }>
        <div className={ classes.profileInfo }>
            <div className={ classes.profHeader }>
                {/* User image  */}
                <div className={ classes.userImgContainer }>
                    <img className={ classes.userImg } src={ defaultUserImg } alt={ 'Dreamer' } />
                    <button className={ classes.uploadImgBtn } onClick={ () => uploadImgInput.current.click() }>Change</button>
                    <form>
                        <input type='file' className={ classes.uploadImgInput } ref={ uploadImgInput } name='avatar' accept="images/*" />
                    </form>
                    
                </div>

                {/* Username */}
                <h4>John Smith</h4>

                {/* Lucidity Level */}
                <p><strong>Lucidity level:</strong> Beginner</p>
                
                {/* Edit profile btn - only show if the profile page is for the current user */}
                <button className={ classes.editProfileButton } onClick={ () => setShowEditOptions( true ) }>Edit Profile</button>

                {/* Follow/unfollow - Only show if user is view another profile */}
                <button className={ classes.editProfileButton }>Follow</button>
            </div>
        </div>

        {/* Edit options and backdrop */}
        { showEditOptions && <Backdrop click={ () => setShowEditOptions( false ) } /> }

        <FormTemplate showForm={ showEditOptions }>
            <h3 style={{ textAlign: 'center' }}>Edit Profile</h3>
            <label htmlFor="username">Username:</label><br />
            <div className={ classes.formGroup }>
                <input type="text" id="" name="username" value={ 'John Smith' } disabled /><button className={ classes.formBtn }>Change</button><br />
            </div>
            <label htmlFor="password">Password:</label><br />
            <div className={ classes.formGroup }>
                <input type="password" id="" name="password" value={ '123456' } disabled /><button className={ classes.formBtn }>Change</button><br />
            </div>
            {/* Hide confirm password field unless changing password */}
            <label htmlFor="password">Confirm Password:</label><br />
            <div className={ classes.formGroup }>
                <input type="confirm" id="" name="confirm-password" value={ '123456' } disabled /><br />
            </div>    
            <label htmlFor="lucidity-level">Lucidity Level: </label><br />
            <select>
                <option value="Beginner">Beginner (0 - 1 / week)</option>
                <option value="Beginner">Novice (2 - 3 / week)</option>
                <option value="Beginner">Intermediate (3 - 5 / week)</option>
                <option value="Beginner">Expert (At will)</option>
            </select><br /><br />

            <input type="submit" value="Submit"></input>
        </FormTemplate>


        {/* border top - Journals and friends Tabs - border bottom */}
        <div className={ classes.profileTabs }>
            <div className={ classes.journalsTab } >
                <button title={ 'Journals' } className={ `${ classes.profileTab} ${ tab === 'journals' && classes.activeTab }` } onClick={ () => setTab('journals') }>2 <BsJournals /></button>
            </div>

            <div className={ classes.friendsTab } onClick={ () => setTab('friends')}>
                <button title={ 'Friends' } className={ `${ classes.profileTab} ${ tab === 'friends' && classes.activeTab }` } onClick={ () => setTab('friends') }>0 <HiUsers /></button>
            </div>
        </div>

        <div className=''>
            {
                tab === 'journals' &&
                <Journal />
            }
            {
                tab === 'friends' &&
                <Friend />
            }
            {/* Friends */}
        </div>



    </div>
    )
}

export default Profile