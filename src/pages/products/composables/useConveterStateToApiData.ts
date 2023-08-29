/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cloneDeep } from 'lodash'
import { TProductCreateNew } from '../type'
import { ProductState } from '@/reducer/product/type'

export default function useConveterStateToApiData(input: ProductState | any): TProductCreateNew | any {
  const cloneInput = cloneDeep(input)
  // @ts-ignore
  delete cloneInput.infos
  // @ts-ignore
  delete cloneInput.dispatch
  // @ts-ignore
  delete cloneInput.photos
  // @ts-ignore
  delete cloneInput.photosStore
  // @ts-ignore
  // return {
  //   ...(input as TProductCreateNew),
  //   productName: 'productName',
  //   auxiliaryName: 'auxiliaryName',
  //   // infos: undefined,
  //   // dispatch: undefined,
  //   // photos: undefined,
  //   // photosStore: undefined,
  //   isVAT: true,
  //   productMainIngredients: '123',
  //   mainFunctions: ['s', 's', 's'],
  //   // motionTime: 1000,
  //   attributes: [
  //     {
  //       value: 'Sizes',
  //       order: 0,
  //       manyChoices: false,
  //       atLeastOne: false,
  //       appear: true,
  //       options: [
  //         {
  //           text: 'xxx',
  //           price: 0
  //         }
  //       ]
  //     }
  //   ],
  //   productQuantity: 1,
  //   productDescription: '...',
  //   productRatingsAverage: 5,
  //   // note: '',
  //   category: '123',
  //   listInformation: [
  //     {
  //       title: 'haha',
  //       order: 1,
  //       appear: true,
  //       informationItems: [
  //         {
  //           text: 'xxx',
  //           image: 'true'
  //         },
  //         {
  //           text: 'yyy',
  //           image: 'false'
  //         }
  //       ]
  //     }
  //   ]
  // }

  return {
    // ...(input as any),
    productName: 'Ổi',
    auxiliaryName: 'Nữ Hoàng Vitamin C',
    productMainIngredients: 'Ổi x Mật Ong',
    mainFunctions: [
      'Hạn sử dụng 8 giờ kể từ khi nhận sản phẩm',
      'Mùi vị trái cây nguyên chất, không chất bảo quản',
      'Trái cây tươi mới được pha chế và sử dụng ngay'
    ],
    productDescription:
      'Nước Cam với vị chua ngọt, chứa nhiều vitamin C, khoáng chất, chất chống oxy hoá. Uống nước ép Cam mỗi ngày giúp cơ thể tràn đầy năng lượng, hệ miễn dịch khoẻ mạnh, cân bằng huyết áp.',
    productPrice: 1000,
    productQuantity: 5,
    category: '64e21f38dfd07555d65d1061',
    note: '',
    // motionTime: 1000,
    attributes: [
      {
        value: 'CHỌN SIZE',
        order: 0,
        manyChoices: false,
        atLeastOne: false,
        appear: true,
        options: [
          {
            text: 'Size M',
            price: 0
          },
          {
            text: 'Size L',
            price: 5000
          }
        ]
      },
      {
        value: 'LIỀU LƯỢNG NGỌT',
        order: 0,
        manyChoices: false,
        atLeastOne: false,
        appear: true,
        options: [
          {
            text: '100% Đường (Ngọt Ngây)',
            price: 0
          },
          {
            text: '50% Đường (Ngọt Vừa)',
            price: 0
          },
          {
            text: '0% Đường (Nguyên Chất)',
            price: 0
          }
        ]
      },
      {
        value: 'LIỀU LƯỢNG ĐÁ',
        order: 0,
        manyChoices: false,
        atLeastOne: false,
        appear: true,
        options: [
          {
            text: '100% Đá (Bình Thường)',
            price: 0
          },
          {
            text: '50% Đá (Ít Đá)',
            price: 0
          },
          {
            text: '0% Đá (Đá Riêng)',
            price: 0
          }
        ]
      },
      {
        value: 'KẾT HỢP THÊM',
        order: 0,
        manyChoices: false,
        atLeastOne: false,
        appear: true,
        options: [
          {
            text: 'Ổi x Mật Ong x Cà Rốt',
            price: 0
          },
          {
            text: 'Ổi x Mật Ong x Lê',
            price: 0
          },
          {
            text: 'Ổi x Mật Ong x Dứa',
            price: 0
          },
          {
            text: 'Ổi x Mật Ong x Dưa Hấu',
            price: 0
          },
          {
            text: 'Ổi x Mật Ong x Cần Tây',
            price: 0
          }
        ]
      }
    ],
    listInformation: [
      {
        title: 'THÔNG TIN VỀ ỔI',
        order: 0,
        appear: true,
        informationItems: [
          {
            text: 'NGUỒN GỐC Ổi có nguồn gốc ở vùng nhiệt đới châu Mỹ, hiện được trồng ở nhiều nơi. Đây là một loại quả giàu Vitamin C. Ổi chủ yếu dùng để ăn tươi và gần đây là làm mứt, sấy khô, đóng hộp, chế biến trà ổi. Cây ổi được trồng ở vùng nhiệt đới và cận nhiệt đới khắp thế giới kể từ khi Châu Âu chiếm đóng Châu Mỹ. Hiện nay cây ổi được trồng nhiều ở các nước thuộc Châu Phi, Nam Á, Đông Nam Á, vùng Caribbean, cận nhiệt đới của Bắc Mỹ, và Úc. Ngoài giống ổi thường (Psidium guajava) còn có những giống ổi địa phương như: ổi trâu, ổi bo, ổi xá lị, ổi mỡ, ổi găng, ổi đào, ổi nghệ.'
          },
          {
            text: 'THÀNH PHẦN DINH DƯỠNG Ổi là loại trái cây nhiệt đới, chứa nhiều vitamin C và là nguồn cung cấp chất xơ tuyệt vời. Ổi và lá ổi chứa beta-sitosterol, quereetine, guaijaverin, leucocyanidin và avicularin. Ổi chín rất giàu vitamin C và các polysaccharide như fructose, xylose, glucose, rhamnose và galactose. Trong 100g ổi bao gồm các chất dinh dưỡng:'
          },
          {
            text: 'ĐẶC TÍNH Quả hình tròn, hình trứng hay hình quả lê, dài 3-10 cm tùy theo giống. Vỏ quả còn non màu xanh, khi chín chuyển sang màu vàng, thịt vỏ quả màu trắng, vàng hay ửng đỏ. Ruột trắng, vàng hay đỏ. Quả chín có vị chua ngọt hay ngọt và có mùi thơm đặc trưng, có thể ăn tươi, làm mứt hay làm nước giải khát.'
          }
        ]
      },
      {
        title: 'TÁC DỤNG DIỆU KÌ CỦA ỔI',
        order: 1,
        appear: true,
        informationItems: [
          {
            text: 'TĂNG CƯỜNG HỆ MIỄN DỊCH Ổi có chứa nhiều vitamin C, hàm lượng cao gấp 4 lần so với cam. Vitamin C giúp tăng cường mức độ miễn dịch giúp cơ thể bạn chống lại các bệnh nhiễm trùng và mầm bệnh thông thường. Ngoài ra, nhiều vitamin C giúp thị lực tốt.'
          },
          {
            text: 'GIẢM NGUY CƠ UNG THƯ Vitamin C, lycopene và các loại polyphenol khác hoạt động như chất chống oxy hóa giúp trung hòa các bệnh nhiễm trùng trong cơ thể, ngăn chặn sự phát triển của các tế bào ung thư. Quả ổi có tác dụng ngăn ngừa ung thư tuyến tiền liệt và cũng ngăn chặn sự phát triển của các tế bào ung thư vú.'
          },
          {
            text: 'NGĂN NGỪA BỆNH TIỂU ĐƯỜNG Hàm lượng chất xơ và chỉ số đường huyết cao giúp ngăn ngừa sự phát triển của bệnh tiểu đường. Hàm lượng chất xơ điều chỉnh lượng đường huyết trong máu của bạn khỏi tăng đột biến.'
          }
        ]
      }
    ]
  }
}
