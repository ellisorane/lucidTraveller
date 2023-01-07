import React from 'react'
import { FiLock } from 'react-icons/fi'
import { MdPublic } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
import classes from './Journal.module.scss'
import defaultUserImg from '../../assets/images/default.jpg'

const Backdrop = React.lazy( () => import('../Backdrop/Backdrop') )
const FormTemplate = React.lazy( () => import('../FormTemplate/FormTemplate') )

function JournalEntry() {
  const [showOptions, setShowOptions] = React.useState( false )
  
  return (
    <div className={ classes.journal }>
      {/* Top Row - User image, username and entry options */}
        <div className={ classes.topRow }>
          <div>
            <img className={classes.userImg} src={ defaultUserImg } alt={ 'Dreamer' } />
            <div>
              <p>John Smith</p>
            </div>
          </div>

          <div>
            <div className={ classes.optionsBtn } style={{ cursor: 'default' }}><FiLock /></div>
            <div className={ classes.optionsBtn } onClick={ () => setShowOptions( true ) }><SlOptions /></div>
          </div>

          {/* Show Options div - default hidden */}
          { showOptions && <Backdrop click={ () => setShowOptions( false ) } /> }
          { showOptions && 
            <div className={ classes.options }>
              <div className={ classes.option }>Edit</div>
              <div className={ classes.option }>Delete</div>
              <div className={ classes.option }>Make public</div>
          </div> }

        </div>
        {/* End of first row */}

        {/* Second row - dream journal title, content and date */}
        <div className={ classes.contentRow }>
          <h4>Dog in a Monster Truck</h4>
          <p>Jan 4, 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Egestas diam in arcu cursus euismod quis. Suspendisse faucibus interdum posuere lorem. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eu volutpat odio facilisis mauris sit amet massa. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Lorem donec massa sapien faucibus et molestie. Semper eget duis at tellus at urna condimentum. Consequat id porta nibh venenatis cras sed felis eget velit. Egestas purus viverra accumsan in. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Arcu vitae elementum curabitur vitae nunc. Mattis molestie a iaculis at erat pellentesque adipiscing.

Massa tincidunt nunc pulvinar sapien et ligula. Nisi lacus sed viverra tellus in. Consequat nisl vel pretium lectus quam id leo in vitae. Sagittis orci a scelerisque purus semper. Est ante in nibh mauris cursus mattis molestie a iaculis. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique. Scelerisque in dictum non consectetur a erat nam at. Amet consectetur adipiscing elit ut aliquam purus. Arcu cursus euismod quis viverra nibh cras. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Facilisis magna etiam tempor orci eu lobortis elementum nibh. A condimentum vitae sapien pellentesque. Ipsum faucibus vitae aliquet nec ullamcorper. Non enim praesent elementum facilisis leo vel. Dolor purus non enim praesent. Laoreet suspendisse interdum consectetur libero. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Nam at lectus urna duis convallis. Pulvinar mattis nunc sed blandit libero.</p>
        </div>



    </div>
  )
}

export default JournalEntry