import classNames from 'classnames'

import Button from 'components/common/button'
import Icon from 'components/common/icon'

type Size = 'small' | 'regular' | 'large'

interface SidesheetProps {
    size?: Size,
    children: React.ReactNode,
    closeSidesheet: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}



const Sidesheet = (props: SidesheetProps) => {


    const { closeSidesheet, children, size = 'regular' } = props

    const sidesheetContainerClass = classNames({
        'sidesheet__container': true,
        [`sidesheet__container--${size}`]: size
    })

    return (
        <div className="sidesheet">
            <div className={sidesheetContainerClass}>
                <div className="sidesheet__container__header">
                    <Button onClick={closeSidesheet} size="tiny">
                        <Icon name="close"></Icon>
                    </Button>
                </div>
                <div className="sidesheet--container--body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Sidesheet;
