import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Colors from '../Theme/Colors';
import { useRouter } from 'expo-router';
const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const onboardingData = [
    { 
      title: "Let's make your dream vacation", 
      content: "Turn your travel dreams into reality. Whether it's pristine beaches, majestic mountains, or vibrant cities we've got you covered.",
      img: require("../assets/images/onboarding1.png"),
    },
    { 
      title: "Discover best places for your vacation", 
      content: "Explore hidden gems. Our smart recommendations consider your preferences to suggest places you'll absolutely love.",
      img: require("../assets/images/onboarding2.png"),
    },
    { 
      title: "Make your path to effortless travel", 
      content: "Say goodbye to travel stress! we streamline every step of your journey. Focus on making memories while we handle the details.",
      img: require("../assets/images/onboarding3.png"),
    }
  ];
  
  const handleNext = () => {
    if(isLastStep) {
      router.push("/Signup");
    }else setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    if(currentStep === 0) {
      return;
    }
    setCurrentStep(currentStep - 1);
  }
  const isLastStep = currentStep === onboardingData.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={onboardingData[currentStep]?.img}
          style={styles.image}
        />

        <View style={styles.overlay} />

        <View style={styles.topContent}>
          {
            currentStep !== 0 && (
              <TouchableOpacity onPress={handlePrevious}>
                <Ionicons name="arrow-back" size={24} style={styles.backButton} />
              </TouchableOpacity>
            )
          }
        </View>

        <View style={styles.bottomContent}>

          <View style={styles.textContent}>
            <Text style={styles.title}>{onboardingData[currentStep].title}</Text>
            <Text style={styles.contentText}>{onboardingData[currentStep].content}</Text>
          </View>

          <View style={styles.progressContainer}>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressDot,
                  index === currentStep ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>

          <View style={styles.navigation}>
            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
              <Text style={styles.nextText}>
                {isLastStep ? 'Get Started' : 'Next Step'}
              </Text>
              <Ionicons name="arrow-forward" size={24} style={styles.nextIcon} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    resizeMode: 'stretch',
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  topContent: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButton: {
    padding:10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 50,
    fontSize: 16,
    color: 'white',
    fontFamily:'Lexend-Bold',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 25,
    // backgroundColor: Colors.DarkBackground,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  progressDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 24,
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 8,
  },
  textContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily:'Lexend-Medium',
    lineHeight: 34,
  },
  contentText: {
    fontSize: 16,
    color: '#D1D2A2',
    textAlign: 'center',
    fontFamily:'Lexend-Light',
    padding: 10,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: Colors.Button,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  nextText: {
    color: Colors.ButtonText,
    fontSize: 16,
    fontWeight: '600',
    fontFamily:'Lexend-Bold',
  },
  nextIcon: {
    marginLeft: 10,
    marginTop: 3,
  },
});

export default OnboardingScreen;