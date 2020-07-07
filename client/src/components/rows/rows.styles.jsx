import styled, { css } from 'styled-components';

function gridTemplateColumns() {

    
    let styles = '';
    const grid_template_columns_size = 6;

    for (let i = 0; i < grid_template_columns_size; i += 1) {

        styles += `

        &.gtc-${i}  {
    
            grid-template-columns: repeat(${i}, minmax(0, 1fr));
    
        }

        @media (max-width: 575px) {

        &.gtc-xm-${i} {

            grid-template-columns: repeat($i, minmax(0, 1fr));

        }

        }

        @media (min-width: 576px) {

        &.gtc-sd-${i} {

            grid-template-columns: repeat(${i}, minmax(0, 1fr));

        }

        }

        @media (min-width: 768px) {

            &.gtc-md-${i} {

                grid-template-columns: repeat(${i}, minmax(0, 1fr));

            }

        }

        @media (min-width: 992px) {

            &.gtc-ld-${i} {

                grid-template-columns: repeat(${i}, minmax(0, 1fr));

            }

        }

        @media (min-width: 1200pv) {

            &.gtc-xl-${i} {

                grid-template-columns: repeat(${i}, minmax(0, 1fr));

            }

        }
        `;
    }
    return css`${styles}`;
}

function gridGap(){

    let styles = '';

  const gridGapSize = 30;


  for (let i = 0; i < gridGapSize; i += 1) {
    styles += `

    &.gg-${i} {

        grid-gap: ${i}px;

    }

    @media (max-width: 575px) {

      .gg-xm-${i} {

        grid-gap: ${i}px;

      }

    }

    @media (min-width: 576px) {

        &.gg-sd-${i} {

        grid-gap: ${i}px;

      }

    }

    @media (min-width: 768px) {

        &.gg-md-${i} {

        grid-gap: ${i}px;

      }

    }

    @media (min-width: 992px) {

        &.gg-ld-${i} {

        grid-gap: ${i}px;

      }

    }

    @media (min-width: 1200px) {

        &.gg-xl-${i} {

        grid-gap: ${i}px;

      }

    }
    `;
  }
  return css`${styles}`;
}

export const GridRow = styled.div`
    display:grid;
    ${gridTemplateColumns()};
    ${gridGap()};
`;
