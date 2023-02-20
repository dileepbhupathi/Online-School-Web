import React from 'react'
import { OnlineSchooleWebsiteBody } from '../../components/OnlineSchoolWebsiteBody/OnlineSchooleWebsiteBody'
import { OnlineSchoolWebsiteNavbar } from '../../components/OnlineSchoolWebsiteNavbar/OnlineSchoolWebsiteNavbar'
import { SchoolWebsiteFooter } from '../../components/SchoolWebsiteFooter/SchoolWebsiteFooter'

export const OnlineSchoolWebsite = () => {
  return (
    <div>
        <OnlineSchoolWebsiteNavbar/>
        <OnlineSchooleWebsiteBody/>
        <SchoolWebsiteFooter/>
    </div>
  )
}
