// Libraries
import React from 'react'

const Logo = ({ blue }) => (
  <React.Fragment>
    {
      blue
      ? (
        <svg width={121} height={40} fill="none">
          <path
            d="M62.402 24.242c0 1.547-.549 2.766-1.646 3.656-1.09.891-2.608 1.336-4.557 1.336-1.796 0-3.384-.343-4.765-1.03v-3.376c1.135.516 2.094.879 2.877 1.09.79.21 1.512.316 2.164.316.782 0 1.38-.152 1.795-.457.422-.304.633-.758.633-1.359 0-.336-.092-.633-.276-.89-.184-.266-.457-.52-.817-.762-.353-.243-1.078-.63-2.175-1.16-1.029-.493-1.8-.965-2.314-1.419a5.31 5.31 0 0 1-1.231-1.582c-.307-.601-.46-1.304-.46-2.109 0-1.515.502-2.707 1.507-3.574 1.013-.867 2.41-1.3 4.19-1.3.874 0 1.707.105 2.497.316.798.21 1.63.507 2.498.89l-1.151 2.824c-.898-.375-1.642-.636-2.233-.785a6.98 6.98 0 0 0-1.727-.223c-.675 0-1.193.16-1.553.481-.361.32-.541.738-.541 1.254 0 .32.073.601.218.844.146.234.376.465.69.691.323.219 1.079.617 2.268 1.195 1.573.766 2.651 1.535 3.234 2.309.584.766.875 1.707.875 2.824zm7.724 2.145c.613 0 1.35-.137 2.21-.41v2.66c-.875.398-1.95.597-3.223.597-1.404 0-2.429-.359-3.073-1.078-.637-.726-.956-1.812-.956-3.258v-6.316h-1.68V17.07l1.934-1.195 1.012-2.766h2.245v2.79h3.602v2.683h-3.602v6.316c0 .508.138.883.414 1.125.284.243.656.364 1.117.364zM82.648 29l-.679-1.781h-.092c-.59.758-1.2 1.285-1.83 1.582-.621.289-1.435.433-2.44.433-1.235 0-2.21-.359-2.923-1.078-.706-.718-1.06-1.742-1.06-3.07 0-1.39.477-2.414 1.428-3.07.96-.664 2.402-1.032 4.328-1.102l2.233-.07v-.575c0-1.328-.668-1.992-2.003-1.992-1.028 0-2.237.317-3.626.95l-1.162-2.415c1.48-.789 3.123-1.183 4.926-1.183 1.726 0 3.05.383 3.97 1.148.921.766 1.382 1.93 1.382 3.492V29h-2.452zm-1.035-6.07l-1.359.047c-1.02.03-1.78.218-2.279.562-.498.344-.748.867-.748 1.57 0 1.008.568 1.512 1.704 1.512.813 0 1.462-.238 1.945-.715.49-.476.736-1.11.736-1.898V22.93zm13.8-7.278c1.52 0 2.708.606 3.568 1.817.86 1.203 1.289 2.855 1.289 4.957 0 2.164-.445 3.84-1.335 5.027-.883 1.188-2.087 1.781-3.614 1.781-1.512 0-2.697-.558-3.557-1.675h-.241L90.936 29h-2.682V10.766h3.51v4.242c0 .539-.046 1.402-.138 2.59h.138c.821-1.297 2.038-1.946 3.649-1.946zm-1.128 2.86c-.867 0-1.5.273-1.9.82-.398.54-.605 1.434-.62 2.684v.386c0 1.407.203 2.414.61 3.024.414.61 1.066.914 1.956.914.721 0 1.293-.336 1.715-1.008.43-.68.644-1.664.644-2.953 0-1.29-.214-2.254-.644-2.895-.43-.648-1.017-.972-1.761-.972zM106.209 29h-3.51V10.766h3.51V29zm1.382-13.102h3.844l2.429 7.372c.207.64.349 1.398.425 2.273h.069c.085-.805.25-1.563.495-2.273l2.383-7.372h3.763l-5.444 14.778c-.498 1.367-1.212 2.39-2.14 3.07-.921.68-1.999 1.02-3.234 1.02a8.003 8.003 0 0 1-1.784-.2V31.73c.422.102.882.153 1.381.153.621 0 1.162-.195 1.623-.586.468-.383.832-.965 1.093-1.746l.207-.645-5.11-13.008zM19.643 40c10.848 0 19.643-8.954 19.643-20S30.49 0 19.643 0C8.794 0 0 8.954 0 20s8.794 20 19.643 20z"
            fill="#5C90E8"
          />
          <path
            d="M25.88 24.004a5.192 5.192 0 0 1-.496 2.268 5.345 5.345 0 0 1-1.389 1.793c-.596.503-1.315.896-2.159 1.176-.843.28-1.778.42-2.805.42a13.681 13.681 0 0 1-2.93-.322 11.61 11.61 0 0 1-2.708-.938l.797-2.997a13.09 13.09 0 0 0 2.214.812 9.46 9.46 0 0 0 2.517.336c.916 0 1.664-.191 2.241-.574.578-.383.867-.938.867-1.666 0-.672-.275-1.223-.826-1.652-.55-.43-1.393-.878-2.53-1.344a17.928 17.928 0 0 1-2.145-1.05 6.928 6.928 0 0 1-1.568-1.219 4.936 4.936 0 0 1-.976-1.498c-.23-.55-.344-1.17-.344-1.862 0-1.718.573-3.038 1.72-3.962 1.145-.925 2.68-1.387 4.606-1.387.915-.007 1.828.087 2.723.28.833.19 1.637.492 2.392.896l-.715 2.997a11.508 11.508 0 0 0-2.021-.77 8.038 8.038 0 0 0-2.16-.294c-.806 0-1.457.154-1.952.462-.495.308-.742.788-.742 1.442-.006.267.036.532.123.784.098.245.254.462.454.63.267.228.557.425.866.588.358.196.812.416 1.362.658.733.318 1.435.654 2.104 1.008.64.335 1.235.748 1.774 1.233.507.459.927 1.01 1.238 1.624.311.616.467 1.325.467 2.128z"
            fill="#fff"
          />
          <path
            d="M11.959 21.658v-1.265h15.366v1.265H11.96zm0-2.128v-1.265h15.366v1.265H11.96z"
            fill="#fff"
          />
        </svg>
      ) : (
        <svg width={121} height={40} fill="none">
          <path
            d="M62.402 24.242c0 1.547-.549 2.766-1.646 3.656-1.09.891-2.608 1.336-4.557 1.336-1.796 0-3.384-.343-4.765-1.03v-3.376c1.135.516 2.094.879 2.877 1.09.79.21 1.512.316 2.164.316.782 0 1.38-.152 1.795-.457.422-.304.633-.758.633-1.359 0-.336-.092-.633-.276-.89-.184-.266-.457-.52-.817-.762-.353-.243-1.078-.63-2.175-1.16-1.029-.493-1.8-.965-2.314-1.419a5.31 5.31 0 0 1-1.231-1.582c-.307-.601-.46-1.304-.46-2.109 0-1.515.502-2.707 1.507-3.574 1.013-.867 2.41-1.3 4.19-1.3.874 0 1.707.105 2.497.316.798.21 1.63.507 2.498.89l-1.151 2.824c-.898-.375-1.642-.636-2.233-.785a6.98 6.98 0 0 0-1.727-.223c-.675 0-1.193.16-1.553.481-.361.32-.541.738-.541 1.254 0 .32.073.601.218.844.146.234.376.465.69.691.323.219 1.079.617 2.268 1.195 1.573.766 2.651 1.535 3.234 2.309.584.766.875 1.707.875 2.824zm7.724 2.145c.613 0 1.35-.137 2.21-.41v2.66c-.875.398-1.95.597-3.223.597-1.404 0-2.429-.359-3.073-1.078-.637-.726-.956-1.812-.956-3.258v-6.316h-1.68V17.07l1.934-1.195 1.012-2.766h2.245v2.79h3.602v2.683h-3.602v6.316c0 .508.138.883.414 1.125.284.243.656.364 1.117.364zM82.648 29l-.679-1.781h-.092c-.59.758-1.2 1.285-1.83 1.582-.621.289-1.435.433-2.44.433-1.235 0-2.21-.359-2.923-1.078-.706-.718-1.06-1.742-1.06-3.07 0-1.39.477-2.414 1.428-3.07.96-.664 2.402-1.032 4.328-1.102l2.233-.07v-.575c0-1.328-.668-1.992-2.003-1.992-1.028 0-2.237.317-3.626.95l-1.162-2.415c1.48-.789 3.123-1.183 4.926-1.183 1.726 0 3.05.383 3.97 1.148.921.766 1.382 1.93 1.382 3.492V29h-2.452zm-1.035-6.07l-1.359.047c-1.02.03-1.78.218-2.279.562-.498.344-.748.867-.748 1.57 0 1.008.568 1.512 1.704 1.512.813 0 1.462-.238 1.945-.715.49-.476.736-1.11.736-1.898V22.93zm13.8-7.278c1.52 0 2.708.606 3.568 1.817.86 1.203 1.289 2.855 1.289 4.957 0 2.164-.445 3.84-1.335 5.027-.883 1.188-2.087 1.781-3.614 1.781-1.512 0-2.697-.558-3.557-1.675h-.241L90.936 29h-2.682V10.766h3.51v4.242c0 .539-.046 1.402-.138 2.59h.138c.821-1.297 2.038-1.946 3.649-1.946zm-1.128 2.86c-.867 0-1.5.273-1.9.82-.398.54-.605 1.434-.62 2.684v.386c0 1.407.203 2.414.61 3.024.414.61 1.066.914 1.956.914.721 0 1.293-.336 1.715-1.008.43-.68.644-1.664.644-2.953 0-1.29-.214-2.254-.644-2.895-.43-.648-1.017-.972-1.761-.972zM106.209 29h-3.51V10.766h3.51V29zm1.382-13.102h3.844l2.429 7.372c.207.64.349 1.398.425 2.273h.069c.085-.805.25-1.563.495-2.273l2.383-7.372h3.763l-5.444 14.778c-.498 1.367-1.212 2.39-2.14 3.07-.921.68-1.999 1.02-3.234 1.02a8.003 8.003 0 0 1-1.784-.2V31.73c.422.102.882.153 1.381.153.621 0 1.162-.195 1.623-.586.468-.383.832-.965 1.093-1.746l.207-.645-5.11-13.008zM19.643 40c10.848 0 19.643-8.954 19.643-20S30.49 0 19.643 0C8.794 0 0 8.954 0 20s8.794 20 19.643 20z"
            fill="#fff"
          />
          <path
            d="M25.88 24.004a5.192 5.192 0 0 1-.496 2.268 5.345 5.345 0 0 1-1.389 1.793c-.596.503-1.315.896-2.159 1.176-.843.28-1.778.42-2.805.42a13.681 13.681 0 0 1-2.93-.322 11.61 11.61 0 0 1-2.708-.938l.797-2.997a13.09 13.09 0 0 0 2.214.812 9.46 9.46 0 0 0 2.517.336c.916 0 1.664-.191 2.241-.574.578-.383.867-.938.867-1.666 0-.672-.275-1.223-.826-1.652-.55-.43-1.393-.878-2.53-1.344a17.928 17.928 0 0 1-2.145-1.05 6.928 6.928 0 0 1-1.568-1.219 4.936 4.936 0 0 1-.976-1.498c-.23-.55-.344-1.17-.344-1.862 0-1.718.573-3.038 1.72-3.962 1.145-.925 2.68-1.387 4.606-1.387.915-.007 1.828.087 2.723.28.833.19 1.637.492 2.392.896l-.715 2.997a11.508 11.508 0 0 0-2.021-.77 8.038 8.038 0 0 0-2.16-.294c-.806 0-1.457.154-1.952.462-.495.308-.742.788-.742 1.442-.006.267.036.532.123.784.098.245.254.462.454.63.267.228.557.425.866.588.358.196.812.416 1.362.658.733.318 1.435.654 2.104 1.008.64.335 1.235.748 1.774 1.233.507.459.927 1.01 1.238 1.624.311.616.467 1.325.467 2.128z"
            fill="#5C90E8"
          />
          <path
            d="M11.959 21.658v-1.265h15.366v1.265H11.96zm0-2.128v-1.265h15.366v1.265H11.96z"
            fill="#5C90E8"
          />
        </svg>
      )
    }
  </React.Fragment>
)

export { Logo }