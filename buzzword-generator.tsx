import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RefreshCw } from 'lucide-react';

const BuzzwordGenerator = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [generatedPhrase, setGeneratedPhrase] = useState('');

  const words = {
    column1: ['Balanced', 'Total', 'Integrated', 'Compatible', 'Synchronized', 
              'Optimal', 'Responsive', 'Functional', 'Parallel', 'Systemized'],
    column2: ['Management', 'Organization', 'Reciprocal', 'Monitored', 'Digital',
              'Modular', 'Transitional', 'Incremental', 'Third generation', 'Policy'],
    column3: ['Contingency', 'Hardware/software', 'Projection', 'Time-frame', 'Concept',
              'Programming', 'Mobility', 'Capability', 'Flexibility', 'Options']
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  };

  const generatePhrase = (number) => {
    if (number.length !== 3) return '';
    
    const digits = number.split('').map(n => parseInt(n));
    return `${words.column1[digits[0]]} ${words.column2[digits[1]]} ${words.column3[digits[2]]}`;
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);
    setInputNumber(value);
    if (value.length === 3) {
      setGeneratedPhrase(generatePhrase(value));
    } else {
      setGeneratedPhrase('');
    }
  };

  const handleRandomGenerate = () => {
    const randomNum = generateRandomNumber();
    setInputNumber(randomNum);
    setGeneratedPhrase(generatePhrase(randomNum));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Corporate Buzzword Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center text-sm text-gray-600">
          Generate impressive-sounding corporate phrases that may or may not mean anything!
        </div>
        
        <div className="flex space-x-4">
          <Input
            type="text"
            placeholder="Enter 3 digits (0-9)"
            value={inputNumber}
            onChange={handleInputChange}
            className="text-lg"
            maxLength={3}
          />
          <Button 
            onClick={handleRandomGenerate}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Random
          </Button>
        </div>

        {generatedPhrase && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <div className="text-center font-medium text-lg">{generatedPhrase}</div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-bold mb-2">Column 1</div>
            {words.column1.map((word, i) => (
              <div key={i} className="text-gray-600">
                {i}: {word}
              </div>
            ))}
          </div>
          <div>
            <div className="font-bold mb-2">Column 2</div>
            {words.column2.map((word, i) => (
              <div key={i} className="text-gray-600">
                {i}: {word}
              </div>
            ))}
          </div>
          <div>
            <div className="font-bold mb-2">Column 3</div>
            {words.column3.map((word, i) => (
              <div key={i} className="text-gray-600">
                {i}: {word}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuzzwordGenerator;
