import React from 'react'
import { IconProps } from '@/utils/types'

export default function EditIcon(props: IconProps) {
  const { className, size = 24 } = props

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M24.4138 6.67171L18.8288 1.08546C18.643 0.899694 18.4225 0.752334 18.1799 0.651796C17.9372 0.551258 17.6771 0.499512 17.4144 0.499512C17.1517 0.499512 16.8916 0.551258 16.6489 0.651796C16.4062 0.752334 16.1857 0.899694 16 1.08546L0.58626 16.5005C0.399734 16.6855 0.251852 16.9058 0.151209 17.1485C0.0505661 17.3912 -0.000829299 17.6515 1.01187e-05 17.9142V23.5005C1.01187e-05 24.0309 0.210724 24.5396 0.585796 24.9147C0.960869 25.2897 1.46958 25.5005 2.00001 25.5005H7.58626C7.849 25.5013 8.10929 25.4499 8.35199 25.3493C8.59469 25.2486 8.81497 25.1007 9.00001 24.9142L24.4138 9.50046C24.5995 9.31474 24.7469 9.09424 24.8474 8.85156C24.948 8.60888 24.9997 8.34877 24.9997 8.08608C24.9997 7.8234 24.948 7.56329 24.8474 7.32061C24.7469 7.07793 24.5995 6.85743 24.4138 6.67171ZM2.41376 17.5005L13 6.91421L15.0863 9.00046L4.50001 19.5855L2.41376 17.5005ZM2.00001 19.9142L5.58626 23.5005H2.00001V19.9142ZM8.00001 23.0867L5.91376 21.0005L16.5 10.4142L18.5863 12.5005L8.00001 23.0867ZM20 11.0867L14.4138 5.50046L17.4138 2.50046L23 8.08546L20 11.0867Z"
        fill=""
      />
    </svg>
  )
}