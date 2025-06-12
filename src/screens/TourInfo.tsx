import React, { useEffect ,useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../views/RootStack';
import SurveyOption from '../../src/components/component/SurveyOption';
import SurveySection from '../../src/components/component/SurveySection';

type TourInfoRouteProp = RouteProp<RootStackParamList, 'TourScreen'>;

    // 여행 기간 옵션
    const durationOptions = [
    { id: 'day_trip', label: '당일치기' },
    { id: '1n2d', label: '1박 2일' },
    { id: '2n3d', label: '2박 3일' },
    { id: '3n4d', label: '3박 4일' },
    { id: '4n5d', label: '4박 5일' },
    { id: '5n6d', label: '5박 6일' },
    ];

    // 동행인 옵션
    const companionOptions = [
    { id: 'alone', label: '혼자' },
    { id: 'family', label: '가족과' },
    { id: 'couple', label: '부모님과' },
    { id: 'friends', label: '연인과' },
    { id: 'children', label: '아이와' },
    { id: 'group', label: '친구와' },
    ];

    // 여행 스타일 옵션
    const styleOptions = [
    { id: 'activity', label: '체험•액티비티' },
    { id: 'sns_hotplace', label: 'SNS 핫플레이스' },
    { id: 'leisure', label: '여유롭게 힐링' },
    { id: 'history_culture', label: '역사•문화•예술' },
    { id: 'tasty_food', label: '맛집 위주' },
    { id: 'famous_spots', label: '유명 관광지 필수' },
    { id: 'shopping', label: '쇼핑 위주' },
    { id: 'local_experience', label: '제주도 느낌 즐김' },
    ];

const TourScreen = ({ route }: { route: TourInfoRouteProp }) => {
  
  // 상태 관리
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedCompanions, setSelectedCompanions] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [moreInfoInput, setMoreInfoInput] = useState('');

  // 기간 선택 핸들러 (단일 선택)
  const handleDurationSelect = (id: string) => {
    setSelectedDuration(id);
  };

  // 동행인 선택 핸들러 (다중 선택)
  const handleCompanionSelect = (id: string) => {
    setSelectedCompanions(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // 여행 스타일 선택 핸들러 (다중 선택)
  const handleStyleSelect = (id: string) => {
    setSelectedStyles(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
      
    });
  };

  // 제출 핸들러
  const handleSubmit = () => {
    const preferences = {
      duration: selectedDuration,
      companions: selectedCompanions,
      styles: selectedStyles,
      moreInfoInput : moreInfoInput
    };
    
    console.log('선택된 여행 취향:', preferences);
    // 여기에 데이터 제출 로직 추가
  };

  useEffect(() => {
   
  },[]);

      return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <SurveySection 
                title="여행 기간은?" 
                subtitle="원하는 기간을 선택해 주세요."
                >
                {durationOptions.map(option => (
                    <SurveyOption
                    key={option.id}
                    label={option.label}
                    selected={selectedDuration === option.id}
                    onPress={() => handleDurationSelect(option.id)}
                    style={styles.durationOption}
                    />
                ))}
                </SurveySection>

                <SurveySection 
                title="누구와 떠나나요?" 
                subtitle="함께 가는 사람은 다중 선택이 가능합니다."
                >
                {companionOptions.map(option => (
                    <SurveyOption
                    key={option.id}
                    label={option.label}
                    selected={selectedCompanions.includes(option.id)}
                    onPress={() => handleCompanionSelect(option.id)}
                    multiSelect={true}
                    style={styles.companionOption}
                    />
                ))}
                </SurveySection>

                <SurveySection 
                title="선호하는 여행 스타일은?" 
                subtitle="함께 가는 사람은 다중 선택이 가능합니다."
                >
                {styleOptions.map(option => (
                    <SurveyOption
                    key={option.id}
                    label={option.label}
                    selected={selectedStyles.includes(option.id)}
                    onPress={() => handleStyleSelect(option.id)}
                    multiSelect={true}
                    style={styles.styleOption}
                    />
                ))}
                </SurveySection>

                <SurveySection 
                title="추가 정보" 
                subtitle="우리 춘식이 한테 원하는 걸 더 적어봐"
                >
                <TextInput 
                multiline={true} 
                style={styles.moreInfoInput} 
                value={moreInfoInput}
                onChangeText={setMoreInfoInput}
                />

                </SurveySection>

                <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSubmit}
                >
                <Text style={styles.submitButtonText}>다음</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
      );
};

export default TourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE600', // 노란색 배경
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  durationOption: {
    width: '30%', // 3개씩 배치
  },
  companionOption: {
    width: '30%', // 3개씩 배치
  },
  styleOption: {
    width: '45%', // 2개씩 배치
  },
  submitButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreInfoInput : {
    minHeight: 150,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    textAlignVertical:"top" ,
  }
});