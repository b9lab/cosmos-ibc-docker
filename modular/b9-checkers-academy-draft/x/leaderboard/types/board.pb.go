// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: leaderboard/board.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Board struct {
	PlayerInfo []PlayerInfo `protobuf:"bytes,1,rep,name=playerInfo,proto3" json:"playerInfo"`
}

func (m *Board) Reset()         { *m = Board{} }
func (m *Board) String() string { return proto.CompactTextString(m) }
func (*Board) ProtoMessage()    {}
func (*Board) Descriptor() ([]byte, []int) {
	return fileDescriptor_34f23611952586d8, []int{0}
}
func (m *Board) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Board) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Board.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Board) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Board.Merge(m, src)
}
func (m *Board) XXX_Size() int {
	return m.Size()
}
func (m *Board) XXX_DiscardUnknown() {
	xxx_messageInfo_Board.DiscardUnknown(m)
}

var xxx_messageInfo_Board proto.InternalMessageInfo

func (m *Board) GetPlayerInfo() []PlayerInfo {
	if m != nil {
		return m.PlayerInfo
	}
	return nil
}

func init() {
	proto.RegisterType((*Board)(nil), "b9lab.checkers.leaderboard.Board")
}

func init() { proto.RegisterFile("leaderboard/board.proto", fileDescriptor_34f23611952586d8) }

var fileDescriptor_34f23611952586d8 = []byte{
	// 197 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xcf, 0x49, 0x4d, 0x4c,
	0x49, 0x2d, 0x4a, 0xca, 0x4f, 0x2c, 0x4a, 0xd1, 0x07, 0x93, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9,
	0x42, 0x52, 0x49, 0x96, 0x39, 0x89, 0x49, 0x7a, 0xc9, 0x19, 0xa9, 0xc9, 0xd9, 0xa9, 0x45, 0xc5,
	0x7a, 0x48, 0xea, 0xa4, 0x64, 0x91, 0x35, 0x15, 0xe4, 0x24, 0x56, 0xa6, 0x16, 0xc5, 0x67, 0xe6,
	0xa5, 0xe5, 0x43, 0xb4, 0x4a, 0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83, 0x99, 0xfa, 0x20, 0x16, 0x44,
	0x54, 0x29, 0x94, 0x8b, 0xd5, 0x09, 0xa4, 0x41, 0xc8, 0x87, 0x8b, 0x0b, 0xa2, 0xc7, 0x33, 0x2f,
	0x2d, 0x5f, 0x82, 0x51, 0x81, 0x59, 0x83, 0xdb, 0x48, 0x4d, 0x0f, 0xb7, 0x75, 0x7a, 0x01, 0x70,
	0xd5, 0x4e, 0x2c, 0x27, 0xee, 0xc9, 0x33, 0x04, 0x21, 0xe9, 0x77, 0x72, 0x3f, 0xf1, 0x48, 0x8e,
	0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58,
	0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0xdd, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4,
	0xfc, 0x5c, 0x7d, 0xb0, 0xe9, 0xfa, 0x30, 0xd3, 0xf5, 0x2b, 0xf4, 0x91, 0x7d, 0x50, 0x52, 0x59,
	0x90, 0x5a, 0x9c, 0xc4, 0x06, 0x76, 0xa6, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x2b, 0x4b, 0x91,
	0x8f, 0x12, 0x01, 0x00, 0x00,
}

func (m *Board) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Board) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Board) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PlayerInfo) > 0 {
		for iNdEx := len(m.PlayerInfo) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PlayerInfo[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintBoard(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintBoard(dAtA []byte, offset int, v uint64) int {
	offset -= sovBoard(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Board) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.PlayerInfo) > 0 {
		for _, e := range m.PlayerInfo {
			l = e.Size()
			n += 1 + l + sovBoard(uint64(l))
		}
	}
	return n
}

func sovBoard(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBoard(x uint64) (n int) {
	return sovBoard(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Board) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBoard
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Board: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Board: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PlayerInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBoard
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthBoard
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBoard
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PlayerInfo = append(m.PlayerInfo, PlayerInfo{})
			if err := m.PlayerInfo[len(m.PlayerInfo)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBoard(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBoard
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipBoard(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBoard
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBoard
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBoard
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthBoard
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBoard
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBoard
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBoard        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBoard          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBoard = fmt.Errorf("proto: unexpected end of group")
)
