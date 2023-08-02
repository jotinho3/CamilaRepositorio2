import { Outlet, NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import BellIcon from '../assets/notification-bell-svgrepo-com.svg'
import userIcon from '../assets/userIcon.png'


export function DefaultLayout() {
    return (
        <div className={styles.LayoutContainer}>

            <header className={styles.LayoutHeader}>

                <div className={styles.BellIconDiv}>
                   <img src={BellIcon} alt="" />
                </div>

                <p>
                    Usuário logado
                </p>

                <img src={userIcon} className={styles.userIcon} alt="" />
                

            </header>

            <main className={styles.layoutMainContainer}>

                    <aside className={styles.layoutSidebar}>
                        <h2>O/ME</h2>

                        <nav className={styles.layoutSidebarNavlinksNav}>
                         <NavLink to='/' title='Jornada Gameficada'>
                             <p>Jornada Gamificada</p>
                         </NavLink>

                         <NavLink to='/welcomekit' title='Jornada Gameficada'>
                              <p>Welcome Kit</p>
                         </NavLink>
                            

                        </nav>

                    </aside>

                    <h1>Layout</h1>
                    <Outlet />
            </main>

            
            
        </div>


        
        
    )
}