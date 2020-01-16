import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

class Dashboard extends React.Component {
    render() {
        return (
            <div className={styles['root']}>
            <div className={styles['dashboard']}>
                <div className={classnames(styles['paper'], styles['main-menu'])}>
                    <div className={styles['button']}>
                        Create Tournament
                    </div>
                </div>
                <div className={styles['container']}>
                    <div className={styles['menu']}>
                        <div className={styles['item']}>My Dashboard</div>
                        <div className={styles['item']}>Library Manager</div>
                        <div className={styles['item']}>Messages</div>
                        <div className={styles['item']}>Notes</div>
                        <div className={styles['item']}>Settings</div>
                    </div>
                    <div className={styles['main']}>
                        <div className={styles['title']}>
                            My Dashboard
                        </div>
                        <div className={styles['info-wrapper']}>
                            <div className={classnames(styles['paper'], styles['alerts'])}>
                                <div className={styles['card-title']}>Alerts</div>
                                <div className={styles['alert']}>
                                    <div className={styles['alert-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['alert-message']}>
                                        <div>1 Team has requested feedback</div>
                                        <div>01/14/20</div>
                                    </div>
                                </div>
                                <div className={styles['alert']}>
                                    <div className={styles['alert-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['alert-message']}>
                                        <div>1 Team has registered for Field Hockey I</div>
                                        <div>01/14/20</div>
                                    </div>
                                </div>
                                <div className={styles['alert']}>
                                    <div className={styles['alert-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['alert-message']}>
                                        <div>5 Teams request feedback</div>
                                        <div>01/14/20</div>
                                    </div>
                                </div>
                                <div className={styles['alert']}>
                                    <div className={styles['alert-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['alert-message']}>
                                        <div>2 Teams have registered for Field Hockey I</div>
                                        <div>01/14/20</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classnames(styles['paper'], styles['todos'])}>
                                <div className={styles['card-title']}>To Do</div>
                                <div className={styles['todo']}>
                                    <div className={styles['todo-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['todo-message']}>
                                        <div>Resolve TRUE Florida scheduling conflict</div>
                                        <div>Due by 02/01/20</div>
                                    </div>
                                </div>
                                <div className={styles['todo']}>
                                    <div className={styles['todo-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['todo-message']}>
                                        <div>Finalize Men's Spring Thaw Registration</div>
                                        <div>Due by 02/01/20</div>
                                    </div>
                                </div>
                                <div className={styles['todo']}>
                                    <div className={styles['todo-logo']}>
                                        Logo
                                    </div>
                                    <div className={styles['todo-message']}>
                                        <div>Resolve Trilogy scheduling conflict</div>
                                        <div>Completed 01/02/20</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['buttons-group']}>
                            <div className={styles['button']}>Live (1)</div>
                            <div className={styles['button']}>Draft (1)</div>
                            <div className={styles['button']}>Historical (0)</div>
                        </div>
                        <div className={styles['tournaments-wrapper']}>
                            <div className={classnames(styles['paper'], styles['tournament'])}>
                                <div className={styles['tournament-info']}>
                                    <div className={styles['tournament-logo']}>Logo</div>
                                    <div className={styles['tournament-title']}>
                                        <div className={styles['card-title']}>Field Hockey I</div>
                                        <div>01/01/2020 - 04/01/2020</div>
                                    </div>
                                </div>
                                <div className={styles['stats']}>
                                    <div className={styles['column']}>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Teams RSVP:</span>
                                            2/8
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Locations:</span>
                                            1
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Schedule:</span>
                                            <span className={styles['link']}>Available</span>
                                        </div>
                                    </div>
                                    <div className={styles['column']}>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Players:</span>
                                            122
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Fields:</span>
                                            1
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Status:</span>
                                            Live
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['tournament-buttons']}>
                                    <div className={styles['button']}>Manage</div>
                                    <div className={styles['link']}>Duplicate</div>
                                </div>
                            </div>
                            <div className={classnames(styles['paper'], styles['tournament'])}>
                                <div className={styles['tournament-info']}>
                                    <div className={styles['tournament-logo']}>Logo</div>
                                    <div className={styles['tournament-title']}>
                                        <div className={styles['card-title']}>Field Hockey I</div>
                                        <div>01/01/2020 - 04/01/2020</div>
                                    </div>
                                </div>
                                <div className={styles['stats']}>
                                <div className={styles['column']}>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Teams:</span>
                                            24
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Locations:</span>
                                            1
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Schedule:</span>
                                            Pending
                                        </div>
                                    </div>
                                    <div className={styles['column']}>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Players:</span>
                                            304
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Fields:</span>
                                            6
                                        </div>
                                        <div className={styles['info']}>
                                            <span className={styles['column-title']}>Status:</span>
                                            Draft
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['tournament-buttons']}>
                                    <div className={styles['button']}>Manage</div>
                                    <div className={styles['link']}>Duplicate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;