import React from "react"
import Button, { ButtonProps } from "@components/fundamentals/button"
import BellIcon from "@components/fundamentals/icons/bell-icon"
import BellNotiIcon from "@components/fundamentals/icons/bell-noti-icon"

type NotificationBellProps = ButtonProps & {
    hasNotifications?: boolean
}

const NotificationBell: React.FC<NotificationBellProps> = ({
    hasNotifications = false,
    ...attributes
}) => {
    return (
        <Button className="w-8 h-8" size="small" {...attributes}>
            {hasNotifications ? <BellNotiIcon /> : <BellIcon />}
        </Button>
    )
}

export default NotificationBell
