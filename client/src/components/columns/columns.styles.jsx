import styled from 'styled-components';


export const GridColumn = styled.div`

&.has-buttton{
  padding-bottom:60px !important;
}
.grid-column{
    .column-overlay{
      display: grid;
      align-items: center;
      grid-gap: 15px;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    &-top{
      .inner{
  
      }
    }
    &-left{
      .inner{
        display: grid;
        align-items: center;
        .column-overlay{
          @media (min-width: 575px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      }
    }
    &-right{
      .inner{
        display: grid;
        align-items: center;
        .column-overlay{
          @media (min-width: 575px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            direction: rtl;
          }
          .body{
            direction: initial;
          }
        }
      }
    }
    &-bottom{
      .inner{
        .column-overlay{
          @media (min-width: 575px) {
            .image{
  
            }
            .body{
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }
          }
  
        }
      }
    }

    &-image-only-center{
  
    }
    &-image-only-left{
  
    }
    &-image-only-right{
  
    }
    &-text-only-center{
  
    }
    &-text-only-left{
  
    }
    &-text-only-right{
  
    }
  }
  `;

  export const GridColumnInner  = styled.div`
  background-color: white,
`;

export const GridColumnOverlay = styled.div`

`;