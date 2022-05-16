import { MdOutlineLocalMovies, MdOutlineHelp } from 'react-icons/md'
import { FaCalendarAlt, FaGift, FaTicketAlt } from 'react-icons/fa'
import { BsInfoCircleFill } from 'react-icons/bs'


export const MenuItems = [
    {
        title: 'Phim',
        url: '#',
        cName: 'nav-links',
        icon: <MdOutlineLocalMovies />
    },
    {
        title: 'Lịch chiếu',
        url: '#',
        cName: 'nav-links',
        icon: <FaCalendarAlt />
    },
    {
        title: 'Ưu đãi',
        url: '#',
        cName: 'nav-links',
        icon: <FaGift />
    },
    {
        title: 'Giá vé',
        url: '#',
        cName: 'nav-links',
        icon: <FaTicketAlt />
    },
    {
        title: 'Giới thiệu',
        url: '#',
        cName: 'nav-links',
        icon: <BsInfoCircleFill />
    },
    {
        title: 'Hỗ trợ',
        url: '#',
        cName: 'nav-links',
        icon: <MdOutlineHelp />
    },
]