function useFeatureFlag() {
  const featureFlag = (featureName: string) => {
    return featureName
  }

  const setFeatureFlag = (featureName: string, enable: boolean) => {
    return { featureName, enable }
  }

  return { 
    featureFlag,
    setFeatureFlag
  };
}

export default useFeatureFlag;