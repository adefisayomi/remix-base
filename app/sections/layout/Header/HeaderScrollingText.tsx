import { useState } from "react"



export default function HeaderScrollingText () {

    return (
        <div className="overflow-hidden border-b border-muted p-2 sticky top-0" id="header-scroll-text-container">
            <p id="header-scroll-text" className="cursor-default text-xs font-mono">
                Lorem ipsum dolorHic, aperiam quia exercitationem sint officiis corrupti nam odit aliquid natus repudiandae vero eveniet ducimus ad, repellat eaque quae magni accusamus
            </p>
        </div>
    )
}